import React from "react"

const Button = function(props) {
  return <button {...props}>{props.value}</button>
}

class NewsletterForm extends React.Component {
  constructor() {
    super()

    this.inputEmail = null
    this.handleOnClickContainer = this.handleOnClickContainer.bind(this)
  }

  handleOnClickContainer() {
    if (this.inputEmail) {
      this.inputEmail.focus()
    }
  }

  render() {
    const props = this.props

    return (
      <div
        className={`NewsletterForm print-none ${
          props.fullWidth ? "mx2 my4 clearfix" : ""
        }`}
      >
        <form // eslint-disable-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
          onClick={this.handleOnClickContainer}
          action="https://app.convertkit.com/forms/2846910/subscriptions"
          method="post"
          data-sv-form="2846910"
          data-uid="417bf7ee6b"
          style={{
            background: "#1E1E1E",
            padding: "2rem",
            display: "block",
            borderRadius: "8px",
            maxWidth: "500px",
            margin: "0 auto 1.5rem auto",
            textAlign: "center",
          }}
          className="block rounded bg-silver max-width-2 mx-auto mt0 mb3 clearfix center"
        >
          <div className="p2 sm-p3 block mx-auto">
            <div>
              <h3 className="mt0">{props.title}</h3>
              <p className="block h4 md-h3 md-h3 italic">{props.children}</p>
            </div>
            {/*
            <label>First Name
            <input type="text" name="fields[first_name]" required />
            </label>
          */}
            <label
              style={{
                display: "block",
                textAlign: "left",
                fontSize: "0.75rem",
                marginBottom: "0.3rem",
                fontWeight: "normal",
                color: "#555",
              }}
              htmlFor="email_address"
            >
              Email Address
            </label>
            <div
              style={{
                minHeight: "3rem",
                display: "flex",
                alignItems: "stretch",
              }}
            >
              <input
                ref={el => (this.inputEmail = el)}
                type="email"
                id="email_address"
                name="email_address"
                placeholder=""
                required
                className=""
                style={{
                  flex: "auto",
                  height: "50px",
                  paddingLeft: "0.5rem",
                  paddingRight: "0.5rem",
                  marginBottom: "0",
                  borderRadius: "8px",
                  animation: "cycle-border 10s infinite",
                  border: "2px solid var(--purple)",
                  boxShadow: "none",
                  boxSizing: "border-box",
                }}
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: `<div style="display: none;" aria-hidden="true">
            <label for="website">Website</label><br>
            <input type="text" id="website" name="website" tabindex="-1" autocomplete="false" value="">
          </div>`,
                }}
              />
              <div style={{ marginLeft: "0.5rem", maxWidth: "40%" }}>
                <Button
                  style={{ width: "100%", background: `#1E1E1E` }}
                  className="Button Button--small Button--outline"
                  type="submit"
                  value="Subscribe"
                />
              </div>
            </div>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: "normal",
                color: "#555",
              }}
            >
              Unsubscribe whenever you’d like! No hard
              <span className="nbsp">&nbsp;</span>feelings.
            </p>
          </div>
        </form>
      </div>
    )
  }
}

NewsletterForm.defaultProps = {
  fullWidth: true,
  title: "Get Type Brigade notifications first.",
  children: (
    <React.Fragment>
      We send out Type Brigade event notifications, and short and useful
      messages for typography and design<span className="nbsp">&nbsp;</span>
      enthusiasts.
    </React.Fragment>
  ),
}

export default NewsletterForm
