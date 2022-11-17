import Link from "next/link";
import { FC } from "react";

export const Cta: FC = () => (
  <div className="bg-gray-50" id="cta">
    <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
      <div>
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Wanna go for it?</span>
        </h2>
        <h3 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block text-teal-600">
            Register and start following your baby growth
          </span>
          <span className="block text-2xl font-medium">
            Or click in Demo version to check it out first
          </span>
        </h3>
      </div>
      <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div className="inline-flex rounded-md shadow">
          <Link
            href="/api/auth/signin"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-5 py-3 text-base font-medium text-white hover:bg-teal-700"
            data-cy="cta-btn-get-started"
          >
            Get started
          </Link>
        </div>
      </div>
    </div>
  </div>
);
