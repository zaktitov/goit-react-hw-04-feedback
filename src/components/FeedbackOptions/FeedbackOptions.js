import s from './FeedbackOptions.module.css';

const FeedbackOptins = ({ goodIncrement, neutralIncrement, badIncrement }) => (
  <div>
    <button
      type="button"
      className={s.counter__btnGreen}
      onClick={goodIncrement}
    >
      Good
    </button>

    <button
      type="button"
      className={s.counter__btnBlue}
      onClick={neutralIncrement}
    >
      Neutral
    </button>

    <button type="button" className={s.counter__btnRed} onClick={badIncrement}>
      Bad
    </button>
  </div>
);

export default FeedbackOptins;
