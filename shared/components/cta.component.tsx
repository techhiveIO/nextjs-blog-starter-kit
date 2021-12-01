import {
  CTA_BUTTON_LABEL,
  CTA_BUTTON_LINK,
  CTA_DESCRIPTION,
  CTA_TITLE,
  MASTHEAD_BG_COLOR
} from '../../template';

const Cta = () => (
  <div className="text-center wrapper cta">
    <Container>
      <h5>{CTA_TITLE}</h5>
      {CTA_DESCRIPTION && <p className="pb-4">{CTA_DESCRIPTION}</p>}
      <a
        href={CTA_BUTTON_LINK}
        className="inline-block px-4 py-2 mt-4 leading-none text-white border border-white rounded hover:border-transparent hover:no-underline hover:text-ui-800 hover:text-teal-500 hover:bg-white lg:mt-0"
      >
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
);

const Container = ({ children }) => <div className="container">{children}</div>;

export default Cta;
