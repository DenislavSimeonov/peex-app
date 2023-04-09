import './Section.scss';

type PropsType = {
  profileId: number;
  sectionId: number;
};

const Section = ({ profileId, sectionId }: PropsType) => {
  return (
    <div className='section' data-testid='section'>
      {`"ProfileId =>" ${profileId}`}
      {`"SectionId =>" ${sectionId}`}
    </div>
  );
};

export default Section;
