import { UserId } from 'model/UserId';
import { Form, useLoaderData } from 'react-router-dom'
import { CSSProperties} from 'react'

function UserEdit() {
    const user: UserId | any = useLoaderData();
  return (
    <Form method='post' id='user-form' style={styles.root}>
        <div style={styles.card}>
            <span style={styles.span}>{`Nro: `}
              <input
              aria-label="Nro"
              type="text"
              name="id"
              defaultValue={user.id}
              readOnly
              />
            </span>
            <span style={styles.span}>{`Name: `}
              <input
              placeholder="Your Name"
              aria-label="Your Name"
              type="text"
              name="name"
              defaultValue={user.name}
              />
            </span>
            <span style={styles.span}>{`User Name: `}
              <input
              placeholder="Your User Name"
              aria-label="Your User Name"
              type="text"
              name="username"
              defaultValue={user.username}
              />
            </span>
            <span style={styles.span}>{`Email: `}
              <input
              placeholder="Your Email"
              aria-label="Your Email"
              type="text"
              name="email"
              defaultValue={user.email}
              />
            </span>
            <span style={styles.span}>{`phone: `}
              <input
              placeholder="Your phone"
              aria-label="Your phone"
              type="text"
              name="phone"
              defaultValue={user.phone}
              />
            </span>
            <div>
                <button type="submit">Save</button>
                <button type="button">Cancel</button>
            </div>
        </div>
    </Form>
  )
}

export default UserEdit

const styles: CSSProperties | any = {
  root: {
    margin: "1rem",
    padding: "1rem auto",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontWeight: "600",
  },
  span: {
    margin: "10px"
  }
};