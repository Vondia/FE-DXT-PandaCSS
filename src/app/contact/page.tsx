import { css } from "../../../styled-system/css"

type ContactProps = {}

export default function Contactpage() {
    return (
        <div className={css({color: "red.700", display: "flex", alignItems: "center", justifyContent: "center"})}>
            <h1>Contact</h1>
            <form>
        <div>
          <label>Name</label>
          <input type="text" name="name" />
        </div>

        <div>
          <label>Email</label>
          <input type="text" name="email" />
        </div>

        <div>
          <label>Message</label>
          <textarea name="message" placeholder="hoi doei"></textarea>
        </div>

        <button type="submit">Send message</button>
      </form>
        </div>
    )
};
