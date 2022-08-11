import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import tgi from '../public/tgi-pages.png'
import rmood from '../public/rmlogo.svg'

const Work = () => {
  return (
    <Layout title="Works">
      <div>
        <h1 className="text-2xl text-bold mb-4">Employments</h1>

        <div className="grid grid-cols-3 gap-6">
          <Section>
            <WorkGridItem id="moonsoft" title="Moonsoft">
              A complete HR solution, including time management, organigrams,
              payroll calculation and more.
            </WorkGridItem>
          </Section>
          {/* <Section>
          <WorkGridItem
            id="walknote"
            title="walknote"
            thumbnail={tgi}
          >
            Music recommendation app for iOS
          </WorkGridItem>
        </Section> */}
        </div>
        <hr className="mb-4" />
        <h1 className="text-2xl text-bold mb-4">Freelancing</h1>
        <div className="grid grid-cols-3 gap-6">
          <Section>
            <WorkGridItem id="robin-mood" title="robin mood" thumbnail={rmood}>
              An employee satisfaction survey tool
            </WorkGridItem>
          </Section>
        </div>
        <hr className="mb-4" />
        <h1 className="text-2xl text-bold mb-4">Projects</h1>
        <div className="grid grid-cols-3 gap-6">
          <Section>
            <WorkGridItem id="tgi-pages" title="TGI-Pages" thumbnail={tgi}>
              A collection of tools to help students through the course
            </WorkGridItem>
          </Section>
        </div>
      </div>
    </Layout>
  )
}

export default Work
