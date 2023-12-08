import Head from "next/head";
import Image from "next/image";

export const metadata = {
    title: 'Tech blog',
    description: 'Tech blog all the latest updates in cloud and IT',
    openGraph: {
        images: '/outsourcing.jpg',
    },
}
const posts = [
    {
        id: 1,
        title: 'The Smart Choice: Outsourcing vs. Freelancing - Unveiling the Superior Option',
        href: '/outsourcing-freelancing',
        description:
            'Unlock the power of outsourcing and enhance your business with Tasrie IT Services, the leaders in DevOps and cloud-native consulting. Say goodbye to freelancing woes.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'DevOps', href: '#' },
        author: {
            name: 'Admin',
            role: 'Blogger',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    // More posts...
]

export default function Home() {
    return (
        <>
        <Head>
            <title>Tech blog</title>
            <meta property="og:title" content="Tech blog" key="title" />
            <meta name="description" content="Tech blog all the latest updates in cloud and IT" />
            <meta property="og:image" content="/blog.jpg" />

        </Head>
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl">
                    <h1 className="text-6xl text-emerald-600 font-bold tracking-tight pb-2 sm:text-6xl">
                        From the blog</h1>
                    <p className="text-xl text-emerald-900 underline font-bold tracking-tight  pb-10 sm:text-xl">
                        Welcome to the tech blog catchup with latest updates in cloud and IT</p>
                        <Image height={500} width={1000} className="w-full rounded-lg shadow-md" src="/blog.jpg"  alt="blog featured image"/>
                    <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
                        {posts.map((post) => (
                            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time dateTime={post.datetime} className="text-gray-500">
                                        {post.date}
                                    </time>
                                    <a
                                        href={post.category.href}
                                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                    >
                                        {post.category.title}
                                    </a>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        <a href={post.href}>
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </a>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-gray-900">
                                            <a href={post.author.href}>
                                                <span className="absolute inset-0" />
                                                {post.author.name}
                                            </a>
                                        </p>
                                        <p className="text-gray-600">{post.author.role}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
