import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/lib/sanity.client";
import { PortableText } from "next-sanity";

type Props = {
  params: Promise<{ id: string }>;
};

const portableTextComponents = {
  block: {
    normal: ({ children }: any) => (
      <p className="mb-4 text-[#4b5563] text-[15px] leading-relaxed">
        {children}
      </p>
    ),
    h1: ({ children }: any) => (
      <h1 className="text-2xl font-bold text-[#111827] mb-4">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-xl font-bold text-[#111827] mb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-[17px] font-bold text-[#111827] mb-4">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-base font-bold text-[#111827] mb-3">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-slate-200 pl-4 italic text-slate-500 mb-4">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-none space-y-2.5 text-[#4b5563] text-[15px] mb-8">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal pl-5 space-y-2.5 text-[#4b5563] text-[15px] mb-8">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="flex items-start">
        <span className="mr-3 mt-2 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0"></span>
        <span>{children}</span>
      </li>
    ),
  },
};

export default async function JobDetailsPage({ params }: Props) {
  const { id } = await params;

  // Fetch job data, latest blog, and other jobs from Sanity
  const query = `{
    "job": *[_type == "job" && _id == $id][0],
    "latestBlog": *[_type == "post"] | order(publishedAt desc)[0] {
      title,
      "slug": slug.current,
      publishedAt,
      "imageUrl": mainImage.asset->url,
      "excerpt": pt::text(body)
    },
    "otherJobs": *[_type == "job" && _id != $id] | order(postedAt desc)[0...3] {
      _id,
      title,
      location
    },
    "totalJobsCount": count(*[_type == "job"])
  }`;
  const data = await client.fetch(
    query,
    { id },
    { next: { revalidate: 60 } },
  );

  const jobData = data.job;
  const latestBlog = data.latestBlog;
  const otherJobs = data.otherJobs || [];
  const totalJobsCount = data.totalJobsCount || 0;

  if (!jobData) {
    notFound();
  }

  // Format the posted date
  const postedDate = jobData.postedAt
    ? new Date(jobData.postedAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "Recently posted";

  // Hardcode company details since they were removed from the schema
  const companyName = "eRoyal Tech Systems";
  const companyFollowers = "1,000+ Global Clients";
  const companyDesc =
    "Powering Global Logistics with Intelligent Software Since 2003. With over two decades of experience, eRoyal Tech Systems has been at the forefront of digital transformation in the logistics sector, delivering robust, scalable, and secure enterprise solutions that drive global trade forward.";


  return (
    <div className="bg-white min-h-screen pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Header Info */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-10 sticky top-20 z-40 bg-white/95 backdrop-blur-sm py-4 border-b border-slate-100/60 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div>
            <h1 className="text-3xl font-bold text-[#111827] mb-2 tracking-tight">
              {jobData.title}
            </h1>
            <p className="text-base font-semibold text-[#111827] mb-1">
              {companyName}
            </p>
            <p className="text-sm text-slate-400">
              {jobData.location} • {postedDate}
            </p>
          </div>

          <a
            href="https://forms.gle/mPprLANWJiRtWgUz5"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto mt-4 md:mt-0 block"
          >
            <button className="px-8 py-2.5 rounded-full bg-[#006CB8] text-white font-semibold hover:bg-[#005A9C] transition-colors shadow-sm w-full md:w-auto">
              Apply
            </button>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Job & Responsibilities */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)]">
              {jobData.about && (
                <>
                  <h2 className="text-xl font-bold text-[#111827] mb-4">
                    About the job
                  </h2>
                  <PortableText
                    value={jobData.about}
                    components={portableTextComponents}
                  />
                </>
              )}

              {jobData.responsibilities && (
                <>
                  <h3 className="text-[17px] font-bold text-[#111827] mt-8 mb-4">
                    Responsibilities:
                  </h3>
                  <PortableText
                    value={jobData.responsibilities}
                    components={portableTextComponents}
                  />
                </>
              )}

              {jobData.lookingFor && (
                <>
                  <h3 className="text-[17px] font-bold text-[#111827] mt-8 mb-4">
                    What We are Looking For:
                  </h3>
                  <PortableText
                    value={jobData.lookingFor}
                    components={portableTextComponents}
                  />
                </>
              )}

              {jobData.skills && (
                <>
                  <h3 className="text-[17px] font-bold text-[#111827] mt-8 mb-4">
                    Skills:
                  </h3>
                  <PortableText
                    value={jobData.skills}
                    components={portableTextComponents}
                  />
                </>
              )}
            </div>

            {/* About Company & Latest Activity */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)]">
              <h2 className="text-xl font-bold text-[#111827] mb-6">
                About company
              </h2>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-slate-100 p-1 shadow-sm">
                  <Image
                    src="/logo.png"
                    width={40}
                    height={40}
                    alt="eRoyal Tech Systems"
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-[#111827]">{companyName}</h3>
                  <p className="text-sm text-slate-400">{companyFollowers}</p>
                </div>
              </div>
              <p className="text-[#4b5563] text-[15px] mb-8 leading-relaxed">
                {companyDesc}
              </p>

              {latestBlog && (
                <>
                  <h3 className="text-[17px] font-bold text-[#111827] mb-4">
                    Latest activity
                  </h3>
                  <Link href={`/blogs/${latestBlog.slug}`} className="block group">
                    <div className="bg-[#F8FAFC] rounded-2xl p-4 border border-slate-100 flex gap-4 items-center hover:shadow-md transition-shadow">
                      <div className="w-16 h-16 bg-slate-200 rounded-xl flex-shrink-0 relative overflow-hidden">
                        {latestBlog.imageUrl ? (
                          <Image
                            src={latestBlog.imageUrl}
                            alt={latestBlog.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                            <span className="text-xs text-slate-400">No Image</span>
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <div className="w-4 h-4 relative flex-shrink-0">
                              <Image
                                src="/logo.png"
                                fill
                                alt="eRoyal Tech Systems"
                                className="object-contain"
                              />
                            </div>
                            <span className="text-xs font-semibold text-[#111827]">
                              {companyName}
                            </span>
                          </div>
                          <span className="text-slate-400 group-hover:text-slate-600">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                              />
                            </svg>
                          </span>
                        </div>
                        <h4 className="font-bold text-[#111827] text-[15px] leading-tight mb-1 truncate group-hover:text-[#006CB8] transition-colors">
                          {latestBlog.title}
                        </h4>
                        <p className="text-xs text-slate-400 line-clamp-1">
                          {latestBlog.excerpt || "Read our latest blog post."}
                        </p>
                      </div>
                    </div>
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Job Specs */}
            <div className="bg-[#F8FAFC] rounded-[2rem] p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#111827] mb-1">
                  Job Specs
                </h2>
                <p className="text-sm text-slate-500 font-medium">
                  Requirements & Details
                </p>
              </div>

              <div className="space-y-6">
                {jobData.experience && (
                  <div className="flex gap-4 items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5 mt-0.5 text-[#111827]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
                      />
                    </svg>
                    <div>
                      <h4 className="font-bold text-[#111827] text-sm">
                        {jobData.experience}
                      </h4>
                      <p className="text-[13px] text-slate-400 mt-0.5">
                        Experience
                      </p>
                    </div>
                  </div>
                )}

                {jobData.type && (
                  <div className="flex gap-4 items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5 mt-0.5 text-[#111827]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <div>
                      <h4 className="font-bold text-[#111827] text-sm">
                        {jobData.type.charAt(0).toUpperCase() +
                          jobData.type.slice(1)}
                      </h4>
                      <p className="text-[13px] text-slate-400 mt-0.5">
                        Job Type
                      </p>
                    </div>
                  </div>
                )}

                {jobData.gender && jobData.gender.length > 0 && (
                  <div className="flex gap-4 items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5 mt-0.5 text-[#111827]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                    <div>
                      <h4 className="font-bold text-[#111827] text-sm capitalize">
                        {jobData.gender.join(", ")}
                      </h4>
                      <p className="text-[13px] text-slate-400 mt-0.5">
                        Gender Required
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Latest Jobs */}
            {otherJobs.length > 0 && (
              <div className="bg-[#F8FAFC] rounded-[2rem] p-8">
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-[#111827]">
                    Latest jobs
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">{totalJobsCount} open positions</p>
                </div>

                <div className="space-y-6">
                  {otherJobs.map((job: any) => (
                    <Link href={`/career/${job._id}`} key={job._id} className="block group">
                      <div>
                        <h4 className="font-bold text-[#111827] text-[15px] mb-1.5 group-hover:text-[#006CB8] transition-colors">
                          {job.title}
                        </h4>
                        <div className="flex items-center text-[13px] text-slate-400 font-medium">
                          <div className="w-4 h-4 mr-2 relative flex-shrink-0">
                            <Image
                              src="/logo.png"
                              fill
                              alt="eRoyal Tech Systems"
                              className="object-contain"
                            />
                          </div>
                          {companyName} • {job.location}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-10 pt-6 text-center border-t border-slate-200">
                  <Link href="/career">
                    <button className="text-[15px] font-bold text-[#111827] hover:text-[#006CB8] transition-colors">
                      See all jobs from {companyName}
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
