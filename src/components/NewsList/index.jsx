import React, { useEffect, useState } from 'react';
import ReactLoading from "react-loading";

import { fetchNewsApi } from "../../api";

import New from '../New';

import Categories from "../../assets/categories.json";

function NewsList() {

  const [news, setNews] = useState([]);
  const [active, setActive] = useState("technology");

  async function fetchNews(category = "technology") {
    try {
      const data = await fetchNewsApi(category);
      setNews(data.articles);
      setActive(category);
    } catch(e) {
      console.error(e);
    }
  }

  async function handleClick(category) {
    fetchNews(category);
  }

  useEffect(() => {
    fetchNews();
  }, []);

  return news && news.length > 0 ? (
    <div className='w-full h-[calc(100%+92px)] flex flex-col items-center overflow-y-auto px-[345px] py-[154px]'>
      <p className='mr-auto mb-2 text-[14px] text-[#A8A8B3]'>Filter by</p>
      <div className="w-full flex flex-wrap items-center gap-4 mb-8">
        {
          Categories.map((category) => (
            <button className={`${category.title.toLocaleLowerCase() === active ? "border-[1px] border-[#EBA417] cursor-not-allowed hover:opacity-100" : "border-[1px] border-[#323238] cursor-pointer hover:opacity-50"} py-1 px-3 text-[#E1E1E6] text-[16px] rounded-full`} onClick={() => handleClick(category.title.toLocaleLowerCase())}>
              <p>{category.title}</p>
            </button>
          ))
        }
      </div>

      {
        news.map((article) => (
          <New
            key={article.title}
            title={article.title}
            description={article.description}
            publishedAt={article.publishedAt}
            url={article.url}
          />
        ))
      }
    </div>
  ) : (
    <div className='w-full h-[calc(100%+92px)] flex justify-center items-center'>
      <ReactLoading type="spin" color="#EBA417" width={45} />
    </div>
  )
}

export default NewsList;