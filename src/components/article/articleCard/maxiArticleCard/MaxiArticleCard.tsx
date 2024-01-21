import CategoryCard from "@/components/category/categoryCard/CategoryCard";
import { Article, Category } from "@prisma/client";
import Link from "next/link";

type Props = {
    article: Article
    categories: Array<Category>
}

const MaxiArticleCard = (props: Props) => {
    return (
        <Link href={"/article/" + props.article.slug}>
            <div className="w-full h-full relative flex items-center text-white group" style={{ minHeight: "260px", backgroundColor: "rgb(30, 0, 0)" }}>
                <div className="absolute top-0 left-0 w-full h-full bg-red-500 opacity-10 z-0 group-hover:bg-red-400 duration-200">
                    <img className="w-full h-full object-cover" src={props?.article?.img || ""} />
                </div>
                <div className="flex flex-col gap-3 z-20 px-4 py-4">
                    <h1 className="text-2xl font-bold group-hover:text-red-600 duration-200 text-start">{props.article.title}</h1>
                    <p className="line-clamp-3 text-start">{props.article.excerpt}</p>
                    <ul className='flex flex-wrap gap-2 text-sm text-neutral-600'>
                        {
                            props.categories.map((category, index) => {
                                return (
                                    <li key={"maxi-article-category-" + index}>
                                        <p>{category.title}, </p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </Link>
    )
}

export default MaxiArticleCard