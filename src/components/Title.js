// const Title = ({text}) => (
//     <div className="title-scrabble">
//       <div className="text">
//         {text.split('').map((char, key) => {
//           return (<span key={key}>{char}</span>);
//         })}
//       </div>
//     </div>
//   );
const Title = ({text}) => (
  <div className="title-scrabble">
    <div className="text">
      {text}
    </div>
  </div>
);

Title.defaultProps = {
  text: ""
};

export default Title;