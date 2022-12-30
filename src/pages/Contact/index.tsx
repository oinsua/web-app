import Calendar from 'components/Calendar';
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
                alt={`img ${contact.avatar}`}
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
            </h1>
          {contact.twitter && (
                <p>
                <a
                    target="_blank"
                    href={`https://twitter.com/${contact.twitter}`}
                    rel="noreferrer"
                >
                    {contact.twitter}
                </a>
                </p>
            )} 

           {contact.notes && <p>{contact.notes}</p>} 

            <div>
            </div> 
            </div> 
        </div>
        <Calendar />
    </PageLayout>
);
}

export default Contact

export type props = {
  contact: TContact;
};
