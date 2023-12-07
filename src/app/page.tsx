import ArticleCard from '@/components/article/articleCard/ArticleCard';
import MiniArticleCard from '@/components/article/articleCard/miniArticleCard/MiniArticleCard';
import CategoryCard from '@/components/category/categoryCard/CategoryCard';
import Featured from '@/components/featured/Featured';

export default function Home() {
  let posts = [1, 2, 3, 4, 5, 6, 7];
  let categories = ["Software Engineer", "Java Development", "Webflux", "Software Engineer", "Java Development", "Webflux"];
  categories.sort((a, b) => a.length - b.length);
  return (
    <div className='flex flex-col lg:flex-row gap-2 lg:gap-6 overflow-visible'>
      <div className='flex flex-col gap-2 w-full lg:w-8/12 overflow-hidden'>
        <div className='flex flex-col gap-2 h-225 md:h-185 xl:h-120'>
          <h1 className='text-lg font-bold text-red-600'>FEATURED</h1>
          <Featured />
        </div>
        <div>
          <h1 className='text-lg font-bold text-red-600 pt-4'>MOST RECENT</h1>
          <div className='flex flex-col gap-10'>
            {
              posts.map((post, index) => {
                return (
                  <ArticleCard />
                )
              })
            }
          </div>
        </div>
      </div>
      <div className='flex flex-col w-full lg:w-4/12 sticky top-0 lg:h-80 flex-shrink-0'>
        <div>
          <h1 className='text-lg font-bold text-red-600'>POPULAR CATEGORIES</h1>
          <div className='flex flex-wrap gap-2 py-2'>
            {
              categories.map((category, index) => {
                return (
                  <CategoryCard categoryName={category} />
                )
              })
            }
          </div>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-lg font-bold text-red-600'>EDITOR'S CHOICE</h1>
          <ul className='flex flex-col gap-2.5'>
            {
              categories.map((category, index) => {
                return (
                  <li>
                    <MiniArticleCard />
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}
