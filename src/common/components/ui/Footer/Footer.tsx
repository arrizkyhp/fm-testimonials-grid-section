import styles from '~/styles/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="text-slate-500 text-[11px] md:text-xs text-center px-3">
        <span>Challenge by </span>
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          className="text-primary-moderateViolet hover:text-dark-desaturated-blue hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        <span>. Coded by </span>
        <a
          href="https://github.com/arrizkyhp"
          className="text-primary-moderateViolet hover:text-dark-desaturated-blue hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          Arrizky Hasya Pratama.
        </a>
      </div>
    </footer>
  );
};

export { Footer };
