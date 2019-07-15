import React from "react";
import styles from "./Component3.module.css"; // Import css modules stylesheet as styles

// A CSS Module is a CSS file in which all class names and animation names
// are scoped locally by default.

function Component3() {
  return (
    <div>
      <p>I'm styled with CSS modules.</p>
      <button className={styles.error}>Error Button</button>
      <p className={styles.pretty}>I'm pretty.</p>
      <p className={styles.superpretty}>I'm superpretty.</p>
    </div>
  );
}

export default Component3;
