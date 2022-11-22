import React from 'react'
import { Form } from "react-router-dom";
import PageLayout from '../../components/PageLayout';
import styles from './css/contact.module.css';

export type TContact = {
  first: string;
  last: string;
  avatar: string;
  twitter: string;
  notes: string;
  favorite: boolean,
};

function Contact() {
  const contact: TContact = {
  first: "Pepe",
  last: "Rodriguez",
  avatar: "https://placekitten.com/g/200/200",
  twitter: "pepe_handle",
  notes: "Some notes",
  favorite: true,
};

return (
    <PageLayout>
        <div id="contact" className={styles.contactContainer}>
            <div>
            <img
                key={contact.avatar}
                src={contact.avatar || ''}
            />
            </div>

            <div>
            <h1>
                {contact.first || contact.last ? (
                <>
                    {contact.first} {contact.last}
                </>
                ) : (
                <i>No Name</i>
                )}{" "}
                <Favorite contact={contact} />
            </h1>

            {contact.twitter && (
                <p>
                <a
                    target="_blank"
                    href={`https://twitter.com/${contact.twitter}`}
                >
                    {contact.twitter}
                </a>
                </p>
            )}

            {contact.notes && <p>{contact.notes}</p>}

            <div>
                <Form action="edit">
                <button type="submit">Edit</button>
                </Form>
                <Form
                method="post"
                action="destroy"
                onSubmit={(event) => {
                    if (
                    !window.confirm(
                        "Please confirm you want to delete this record."
                    )
                    ) {
                    event.preventDefault();
                    }
                }}
                >
                <button type="submit">Delete</button>
                </Form>
            </div>
            </div>
        </div>
    </PageLayout>
);
}

export default Contact

export type props = {
  contact: TContact;
};

function Favorite({ contact }: props) {
// yes, this is a `let` for later
let favorite = contact.favorite;
return (
  <Form method="post">
    <button
      name="favorite"
      value={favorite ? "false" : "true"}
      aria-label={
        favorite
          ? "Remove from favorites"
          : "Add to favorites"
      }
    >
      {favorite ? "★" : "☆"}
    </button>
  </Form>
);
}