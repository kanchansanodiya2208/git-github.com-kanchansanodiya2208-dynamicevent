import NewLetterSighup from "../compoents/NewsLetterSignup";
import PageContent from "../compoents/PageContent";

function Newsletterpage () {

    return(
    <PageContent title="join Our News Letter">
        <NewLetterSighup></NewLetterSighup>

    </PageContent>
    );
}
export default Newsletterpage;
export async  function action ({request}) {
    const data = await request.formData();
    const email = data.get('email');
    console.log(email);
    return {message: 'Sign up SuccseeFully'}
} 