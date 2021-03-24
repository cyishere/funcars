import CheckoutStatus from "../../components/CheckoutStatus";
import PageHeader from "../../components/PageHeader";

const Layout = ({ children, path, pageTitle }) => {
  return (
    <main className="main checkout-page">
      <CheckoutStatus status={path[path.length - 1]} />

      <PageHeader>{pageTitle}</PageHeader>

      <section className="section grid sw-3-1">{children}</section>
    </main>
  );
};

export default Layout;