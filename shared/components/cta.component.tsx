import {
  MASTHEAD_BG_COLOR,
  PRIMARY_COLOR,
  CTA_TITLE,
  CTA_DESCRIPTION,
  CTA_BUTTON_LABEL,
  CTA_BUTTON_LINK
} from '../../template'

const Cta = () => (
  <div className='wrapper cta text-center'>
    <Container>
      <h5>{CTA_TITLE}</h5>
      {CTA_DESCRIPTION && <p className='pb-4'>{CTA_DESCRIPTION}</p>}
      <a href={CTA_BUTTON_LINK} className='inline-block px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0'>
        {CTA_BUTTON_LABEL}
      </a>
    </Container>
    <style jsx>{`
      .wrapper {
        background: ${MASTHEAD_BG_COLOR};
        padding: 100px 0;
      }
      @media (max-width: 739px) {
        .wrapper {
          margin-top: 0;
        }
      }
      h5 {
        text-align: center;
        color: white;
        font-size: 2rem;
        font-weight: bold;
      }
      p {
        text-align: center;
        color: white;
      }
    `}</style>
  </div>
)

const Container = ({ children }) => (
  <div className='container'>
    {children}
  </div>
)

export default Cta