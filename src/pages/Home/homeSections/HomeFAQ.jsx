import FAQComp from "../../../components/FAQComp";

const HomeFAQ = () => {
    const faqData = [
        {
            id: 1,
            title: 'Frequently Asked Questions?',
            paragraph: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        },
        {
            id: 2,
            title: 'Frequently Asked Questions?',
            paragraph: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        },
        {
            id: 3,
            title: 'Frequently Asked Questions?',
            paragraph: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        },
        {
            id: 4,
            title: 'Frequently Asked Questions?',
            paragraph: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        },
        {
            id: 5,
            title: 'Frequently Asked Questions?',
            paragraph: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        },
        {
            id: 6,
            title: 'Frequently Asked Questions?',
            paragraph: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        },
        {
            id: 7,
            title: 'Frequently Asked Questions?',
            paragraph: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        },
        {
            id: 8,
            title: 'Frequently Asked Questions?',
            paragraph: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        },
        {
            id: 9,
            title: 'Frequently Asked Questions?',
            paragraph: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        },

    ]

    return <section className="section-div">
        <h2 className='text-4xl text-center mb-12 font-semibold'>Frequently Asked Questions</h2>
        <div className='grid lg:grid-cols-3 items-start gap-8'>
            {
                faqData.map(data => (
                    <FAQComp
                        key={data.id}
                        title={data.title}
                        paragraph={data.paragraph}
                    />
                ))
            }
        </div>
    </section>;
}

export default HomeFAQ;
