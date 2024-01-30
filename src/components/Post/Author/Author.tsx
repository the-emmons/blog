import React from "react";

import { useSiteMetadata } from "@/hooks";
import { getContactHref } from "@/utils";

import * as styles from "./Author.module.scss";

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles.author}>
      <p className={styles.bio}>
        Thanks for reading!If you're interested in discussing this topic or have any questions,
        <a
          className={styles.twitter}
          href={getContactHref("linkedin", author.contacts.linkedin)}
          rel="noopener noreferrer"
          target="_blank"
        >
          shoot me a message on LinkedIn.
        </a>
      </p>
    </div>
  );
};

export default Author;
