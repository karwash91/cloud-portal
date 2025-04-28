'use client';
import { RocketLaunchIcon, CodeBracketIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import Timeline, { TimelineItem } from '@/components/Timeline';

// Feature definitions for the overview section
const features = [
  {
    name: 'New to cloud?',
    description:
      'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.',
    href: '#',
    linkDescription: 'Quickstart',
    icon: RocketLaunchIcon,
  },
  {
    name: 'For developers',
    description:
      'Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.',
    href: '#',
    linkDescription: 'API',
    icon: CodeBracketIcon,
  },
  {
    name: 'Reports',
    description:
      'Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.',
    href: '#',
    linkDescription: 'Reports',
    icon: BookOpenIcon,
  },
];

// Timeline items mapping the roadmap to truist.cloud.com
const timelineItems: TimelineItem[] = [
  {
    name: 'Define Scope for MVP',
    description:
      'Define scope of features for MVP.',
    date: 'Apr 2025',
    dateTime: '2025-04',
  },
  {
    name: 'Create Archer/ServiceNow Application',
    description:
      'Create a new application record in Archer/ServiceNow.',
    date: 'May 2025',
    dateTime: '2025-05',
  },
  {
    name: 'Develop L0/L1 Docs & Security Blueprints',
    description:
      'Draft Level 0 and Level 1 architectural diagrams along with security blueprint documents required for infrastructure approval.',
    date: 'Jun 2025',
    dateTime: '2025-06',
  },
  {
    name: 'Provision Infrastructure',
    description:
      'Deploy the compute, networking, and storage resources in the designated environment using infrastructure-as-code templates.',
    date: 'Jul 2025',
    dateTime: '2025-07',
  },
  {
    name: 'Obtain IP or DNS Name',
    description:
      'Allocate a public IP address or DNS hostname for the new infrastructure, preparing for the DNS registration request.',
    date: 'Aug 2025',
    dateTime: '2025-08',
  },
  {
    name: 'Submit DNS Request for truist.cloud.com',
    description:
      'File the DNS registration request with network services to map truist.cloud.com to the allocated IP/DNS name.',
    date: 'Sep 2025',
    dateTime: '2025-09',
  },
];

// Main page component for the home route
export default function Page() {
  return (
    <>
      {/* Feature overview section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Everything you need to deploy your cloud app
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
              accusamus quisquam.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-2xl sm:mt-16 lg:mt-20 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="text-base font-semibold text-gray-900 leading-7">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-truistpurple-600">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <a href={feature.href} className="text-sm font-semibold leading-6 text-truistpurple-600">
                        {feature.linkDescription} <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Roadmap timeline section */}
      <section className="bg-truistpurple-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Roadmap to truist.cloud.com
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Follow these key milestones to launch the truist.cloud.com.
            </p>
          </div>
          <div className="mx-auto mt-8">
            <Timeline items={timelineItems} />
          </div>
        </div>
      </section>
    </>
  );
}
