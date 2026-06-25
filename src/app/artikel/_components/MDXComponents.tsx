import Image from "next/image";
import React from "react";

export const MDXComponents = {
  h1: (props: any) => (
    <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mt-10 mb-6 leading-tight" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-2xl md:text-3xl font-bold text-navy-800 mt-12 mb-5 leading-snug group" {...props}>
      {props.children}
    </h2>
  ),
  h3: (props: any) => (
    <h3 className="text-xl md:text-2xl font-bold text-navy-800 mt-8 mb-4 leading-snug" {...props} />
  ),
  p: (props: any) => (
    <p className="text-gray-700 text-sm md:text-md lg:text-lg leading-relaxed mb-6" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-disc pl-6 mb-6 text-gray-700 text-sm md:text-lg lg:text-xl lg:leading-relaxed space-y-2 marker:text-primary-500" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal pl-6 mb-6 text-gray-700 text-sm md:text-lg lg:text-xl lg:leading-relaxed space-y-2 marker:text-primary-600 marker:font-bold" {...props} />
  ),
  li: (props: any) => <li {...props} />,
  // a: (props: any) => (
  //   <a
  //     className="text-primary-600 font-medium hover:text-primary-700 underline decoration-primary-200 hover:decoration-primary-600 underline-offset-4 transition-all"
  //     {...props}
  //   />
  // ),
  a: ({ href, children, ...props }: any) => {
    const isExternal = href?.startsWith("http");

    return (
      <a
        href={href}
        {...(isExternal
          ? {
            target: "_blank",
            rel: "noopener noreferrer",
          }
          : {})}
        className="text-primary-600 font-medium hover:text-primary-700 underline decoration-primary-200 hover:decoration-primary-600 underline-offset-4 transition-all"
        {...props}
      >
        {children}
      </a>
    );
  },
  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 border-primary-500 bg-primary-50/50 p-6 rounded-r-xl my-8 italic text-navy-800 text-lg"
      {...props}
    />
  ),
  strong: (props: any) => <strong className="font-bold text-navy-900" {...props} />,
  img: (props: any) => (
    <figure className="my-10">
      <img className="rounded-2xl w-full h-auto shadow-md" loading="lazy" {...props} />
      {props.alt && (
        <figcaption className="text-center text-sm text-gray-500 mt-3 italic">
          {props.alt}
        </figcaption>
      )}
    </figure>
  ),
  hr: (props: any) => <hr className="my-12 border-gray-200" {...props} />,
  table: (props: any) => (
    <div className="overflow-x-auto mb-8 rounded-xl border border-gray-200 shadow-sm">
      <table className="min-w-full divide-y divide-gray-200" {...props} />
    </div>
  ),
  th: (props: any) => (
    <th className="bg-gray-50 px-6 py-4 text-left text-sm font-semibold text-navy-900" {...props} />
  ),
  td: (props: any) => (
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-t border-gray-100" {...props} />
  ),
};
