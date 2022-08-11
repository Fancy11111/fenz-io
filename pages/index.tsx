import Card from '../components/card'
import Section from '../components/section'
import BlogPreview from '../components/blog/blog-preview'
import Animated from '../components/animated'
import NextLink from 'next/link'
import Image from 'next/image'
import { useThemeMode } from '../libs/theme/theme'
import Spacer from '../components/spacer'

import { Disclosure, Transition } from '@headlessui/react'
import { ArrowRightFill } from '../components/icons'
import Description from '../components/description'

const Page = () => {
  const introText =
    "Hi, I'm Daniel, a software engineer(ing student) from Austria"
  return (
    <div className="container-sm xl:container-md pt-6 text-slate-900 dark:text-gray-200">
      <br />
      {/* <Animated /> */}
      <div className="rounded-lg flex flex-row justify-center text-xl bg-emerald-300 dark:bg-emerald-600 text-slate-900 dark:text-gray-200 p-3 mb-6 items-center">
        {introText}
      </div>
      <div className="flex container-sm">
        <div className="mr-20">
          <h2 className="text-4xl mb-2 font-bold">Daniel Fenz</h2>
          <p>Software Engineer and Music Enthusiast</p>
        </div>
        <div className="flex-shrink mt-4 md:mt-0 md:ml-6 items-center">
          <Image
            className="border-2 border-none inline-block max-w-[100px] rounded-full"
            src="/me.png"
            alt="Image of myself"
            width={100}
            height={100}
          />
        </div>
      </div>
      <Section>
        <h3 className="text-4xl font-bold">Education</h3>
        <div className="ml-2">
          <ul className="list-disc list-inside">
            <li>
              <Description
                short="HTBLuVA Wr. Neustadt (2015-2019)"
                long={
                  <>
                    From 2014 to 2019 I visited{' '}
                    <a
                      href="https://www.htlwrn.ac.at/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      HTBLuVA Wr. Neustadt
                    </a>
                    . <br /> It is a vocational high school with focus on
                    Informatics. I was taught Python, Java, C#, C++, Javascript,
                    SQL Server, Oracle Server, SQL Server and basics of project
                    management.
                  </>
                }
              ></Description>
            </li>
            <li>
              <Description
                short="TU Wien (2022-01 - )"
                long={
                  <>
                    In September of 2020 I started my Bachelor in{' '}
                    <a
                      href="https://friendlycaptcha.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      TU Wien
                    </a>
                    . <br />
                    The course of study provides education in the basics of
                    Software Engineering, Databases, Operating System,
                    Algorithms and Datastructures, programming paradigms
                    (procedural, functional, object oriented and declarative),
                    Distributed Systems and Security and Project Management.
                  </>
                }
              ></Description>
            </li>
          </ul>
        </div>
      </Section>
      <Section>
        <h3 className="text-4xl font-bold">Work</h3>
        <div className="ml-2">
          <ul className="list-disc list-inside">
            <li>
              <Description
                short="moonsoft HR Solutions (2019-09 - 2019-12, 2020-07 - 2021-12)"
                long={
                  <>
                    Working as a backend developer at{' '}
                    <a
                      href="https://www.moonsoft.at/en/home-en/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      moonsoft HR Solutions
                    </a>
                    . Tech Stack: C#, Oracle SQL and SQL Developer, a lot of
                    proprietary build tools and a custom ORM. Tasks included
                    things like building an employee questioning system,
                    creating a system to create rules to update collective
                    agreement contracts based on customizable rulesets,
                    improving an existing job system.
                  </>
                }
              ></Description>
            </li>
            <li>
              <Description
                short="Friendly Captcha GmbH (2022-01 - )"
                long={
                  <>
                    Working as a freelance full stack developer for{' '}
                    <a
                      href="https://friendlycaptcha.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Friendly Captcha GmbH
                    </a>
                    . <br />
                    My main task is creating and maintaining a user friendly
                    dashboard to manage and monitor your applications. The
                    frontend is built with Vue.js and Tailwind, while the
                    backend is built with Go, Postgres, Redis and Clickhouse. I
                    am also working (a bit) on Wordpress Integrations.
                  </>
                }
              ></Description>
            </li>
          </ul>
        </div>
      </Section>
      <Section>
        <h3 className="text-4xl font-bold">Projects</h3>
        <div className="flex flex-column sm:flex-row flex-wrap justify-between items-center">
          <Spacer />
          <a href="https://robinmood.eu/" target="_blank" rel="noreferrer">
            <Card
              title="Robin Mood"
              text="An employee satisfaction survey tool"
            >
              <Image
                src="/rmlogo.svg"
                alt="Robin Mood logo"
                className="aspect-"
                width={100}
                height={100}
              />
            </Card>
          </a>
          <Spacer />
          <a href="https://robinmood.eu/" target="_blank" rel="noreferrer">
            <Card
              title="TGI Pages"
              text="An assortment of tools to help students in introductory IT lectures"
            >
              <Image
                className="aspect-video"
                src="/tgi-pages.png"
                alt="TGI Pages Logo"
                width={100}
                height={100}
              />
            </Card>
          </a>
          <Spacer />
        </div>
      </Section>
      <Section>
        <h3 className="">Blog</h3>
        <Section>
          <p>
            See my latest Blog Post down below or click{' '}
            <NextLink href="/blog">here</NextLink> to search through them
          </p>
        </Section>
        <BlogPreview limit={1} skip={0} />
      </Section>
      {/*  */}
    </div>
  )
}

export default Page
