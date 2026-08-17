import Image from "next/image";
import Link from "next/link";
import { client } from "@/lib/sanity.client";

export default async function CareerPage() {
  // Fetch all jobs from Sanity
  // We use pt::text(about) to extract a plain string from the PortableText block for the description preview
  const query = `*[_type == "job"] | order(postedAt desc) {
    _id,
    title,
    type,
    location,
    "description": pt::text(about)
  }`;
  
  const openings = await client.fetch(query, {}, { next: { revalidate: 60 } });

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4 tracking-tight">
            Join the e-Royaltech Family
          </h1>
          <p className="text-lg text-slate-600">
            Explore exciting career opportunities with us.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative w-full aspect-video max-h-[600px] rounded-[2rem] overflow-hidden mb-20 shadow-sm bg-[#f4f9fd]">
          <Image
            src={"/e-royal-team.webp"}
            height={1080}
            width={1920}
            alt="team"
            className="object-cover"
          />
        </div>

        {/* Current Openings Section */}
        <div className="w-full">
          <h2 className="text-3xl md:text-4xl font-medium text-center text-[#111827] mb-12">
            Current Openings
          </h2>

          {openings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {openings.map((job: any) => (
                <Link
                  href={`/career/${job._id}`}
                  key={job._id}
                  className="bg-[#F1F8FF] rounded-2xl p-8 flex flex-col justify-between hover:shadow-md transition-shadow border border-slate-100 block group"
                >
                  <div>
                    <h3 className="text-xl font-bold text-[#111827] mb-1 group-hover:text-[#006CB8] transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-sm text-slate-500 mb-4 border-b border-slate-200 pb-4 capitalize">
                      {job.type ? job.type.replace('-', ' ') : "Full Time"}
                    </p>
                    <p className="text-[15px] leading-relaxed text-[#333333] mb-6 pt-2 line-clamp-3">
                      {job.description || "Exciting opportunity at E-Royal Tech. Click to learn more about the responsibilities and requirements for this role."}
                    </p>
                  </div>

                  <div className="flex items-center text-[#111827] font-medium text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 mr-1.5 text-slate-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                    {job.location}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-slate-500">There are currently no open positions. Please check back later!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
