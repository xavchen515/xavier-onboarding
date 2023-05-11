import Head from "next/head";
import { Container, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fintrack - Manage Your Finances</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <main>
        <div className="d-flex flex-column justify-content-center align-items-center text-center bg-light vh-100">
          <h1 className="display-4 font-weight-bold">Fintrack</h1>
          <h2 className="text-muted mb-5">
            Manage Your Finances with Ease
          </h2>
          <Container>
            <Row className="justify-content-center">
              <Col md={4} className="text-center mb-3">
                <Link href="/overview">
                  <Button
                    variant="primary"
                    size="lg"
                    block
                    className="py-4 rounded-0 font-weight-bold"
                  >
                    Go to Overview
                  </Button>
                </Link>
              </Col>
              <Col md={4} className="text-center mb-3">
                <Link href="/expenses">
                  <Button
                    variant="outline-secondary"
                    size="lg"
                    block
                    className="py-4 rounded-0 font-weight-bold"
                  >
                    Manage Your Expenses
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
          <p className="text-muted mt-auto py-3">
            Made with ❤️ by Xavier
          </p>
        </div>
      </main>
    </>
  );
}
