const DivEnd = ({tab}) => (
    <div className={`row ${tab}`}>
      <span className='grey'>{'</'}</span>
      <span className='blue'>div</span>
      <span className='grey'>{'>'}</span>
    </div>
  );
  const DivStart = ({tab, text}) => (
    <div className={`row ${tab}`}>
      <span className='grey'>{'<'}</span>
      <span className='blue'>div </span>
      <span className='lightblue'>class=</span>
      <span className='orange'>"{text}"</span>
      <span className='grey'>{'>'}</span>
    </div>
  );
  const Text = ({tab, text}) => (
    <div className={`row text-typing ${tab}`}>
      <p><span className='white'>{text}</span></p>
    </div>
  );

  DivEnd.defaultProps = {
    tab: "",
  };

  DivStart.defaultProps = {
    tab: "",
    text: "",
  };

  Text.defaultProps = {
    tab: "",
    text: "",
  };

  export {
    DivEnd,
    DivStart,
    Text
  }