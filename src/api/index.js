export const fetchNewsApi = async (category = "technology") => {
    const response = await fetch(`https://saurav.tech/NewsAPI/top-headlines/category/${category.toLocaleLowerCase()}/us.json`);
    const data = await response.json();
    return data;
}