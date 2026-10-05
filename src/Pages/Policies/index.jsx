import {
    ArrowLeft,
    ArrowUpRight,
    CheckCircle2,
    CreditCard,
    FileText,
    Lock,
    ShieldCheck,
    Sparkles,
} from "lucide-react";
import { Footer, Navbar } from "../../components";
import "./style.css";

const policies = [
    {
        number: "01",
        title: "General Terms",
        icon: FileText,
        content: (
            <>
                <p>
                    By placing an order or requesting our services, you
                    acknowledge that you have read, understood, and agreed
                    to these policies.
                </p>

                <p>
                    These policies apply to all services, commissions,
                    artwork, designs, animations, 2D/3D work, models,
                    illustrations, and other creative services provided
                    through our official channels.
                </p>

                <p>
                    If a specific project agreement contains additional
                    terms, those terms may apply to that project alongside
                    these general policies.
                </p>
            </>
        ),
    },

    {
        number: "02",
        title: "Orders & Payments",
        icon: CreditCard,
        content: (
            <>
                <p>
                    Work begins once the required payment or deposit has
                    been received and the project details have been confirmed.
                </p>

                <p>
                    The final price of a project depends on its scope,
                    complexity, requirements, and agreed deliverables.
                </p>

                <p>
                    Payments must be made only through the payment methods
                    officially provided by Artistry World. Do not send
                    payments to unofficial accounts, individuals, or
                    payment links.
                </p>
            </>
        ),
    },

    {
        number: "03",
        title: "Project Scope & Revisions",
        icon: Sparkles,
        content: (
            <>
                <p>
                    Each project is completed according to the requirements
                    and scope agreed upon at the start of the project.
                </p>

                <p>
                    Reasonable revisions related to the original agreed
                    requirements may be included where applicable.
                </p>

                <p>
                    Requests that substantially change the original concept,
                    brief, style, subject, dimensions, or deliverables may
                    be treated as additional work and may require an
                    additional fee.
                </p>
            </>
        ),
    },

    {
        number: "04",
        title: "Client Responsibilities",
        icon: CheckCircle2,
        content: (
            <>
                <p>
                    Clients are responsible for providing accurate
                    information, references, files, instructions, and
                    approvals necessary for the project.
                </p>

                <p>
                    Delays caused by missing information, late responses,
                    unavailable references, or changes in requirements may
                    affect the delivery timeline.
                </p>

                <p>
                    Clients must also ensure that any materials they provide
                    to us can legally be used for the requested project.
                </p>
            </>
        ),
    },

    {
        number: "05",
        title: "Delivery & Deadlines",
        icon: ArrowUpRight,
        content: (
            <>
                <p>
                    Estimated delivery times are communicated based on the
                    project scope and our current workload.
                </p>

                <p>
                    Delivery estimates may change when delays are caused by
                    circumstances outside our reasonable control, including
                    delayed client feedback, technical problems, platform
                    issues, or changes requested during the project.
                </p>

                <p>
                    Final files will be delivered through the agreed
                    communication or file-delivery method.
                </p>
            </>
        ),
    },

    {
        number: "06",
        title: "Ownership & Usage Rights",
        icon: Lock,
        content: (
            <>
                <p>
                    Unless otherwise agreed in writing, payment for a
                    completed project does not automatically transfer every
                    possible intellectual-property right associated with
                    the work.
                </p>

                <p>
                    The permitted personal, commercial, promotional, or
                    resale use of the final work depends on the license or
                    usage terms agreed for the project.
                </p>

                <p>
                    Source files, editable files, working files, project
                    files, or unused concepts are not automatically included
                    unless specifically agreed.
                </p>
            </>
        ),
    },

    {
        number: "07",
        title: "Cancellation Policy",
        icon: ArrowLeft,
        content: (
            <>
                <p>
                    Cancellation requests must be communicated through an
                    official communication channel as soon as possible.
                </p>

                <p>
                    If work has already started, the amount refundable, if
                    any, may depend on the amount of work already completed,
                    project expenses, and the terms agreed before the
                    project began.
                </p>

                <p>
                    Completed and delivered work cannot normally be treated
                    as an unused service simply because the client later
                    changes their mind.
                </p>
            </>
        ),
    },

    {
        number: "08",
        title: "Refund Policy",
        icon: ShieldCheck,
        content: (
            <>
                <p>
                    Refunds are handled according to the circumstances of the
                    individual project and the applicable terms agreed with
                    the client.
                </p>

                <p>
                    Refund requests must contain sufficient information for
                    us to review the matter. We may request supporting
                    documentation, project files, screenshots, timestamps,
                    or other relevant evidence.
                </p>

                <p>
                    Refunds will be processed through the applicable payment
                    method or payment provider where possible.
                </p>
            </>
        ),
    },

    {
        number: "09",
        title: "AI-Generated Work & Refund Claims",
        icon: ShieldCheck,
        important: true,
        content: (
            <>
                <div className="policy-highlight">
                    <span className="policy-highlight-label">
                        AI WORK POLICY
                    </span>

                    <h3>
                        If the delivered work is proven to have been
                        created by AI when the project was agreed to be
                        created as original human-made work, you may be
                        eligible for a refund.
                    </h3>
                </div>

                <p>
                    If you believe that delivered work was generated by AI,
                    you must provide <strong>valid and credible proof</strong>
                    supporting your claim.
                </p>

                <p>
                    Evidence may include relevant source information,
                    verifiable metadata, original files, comparison evidence,
                    or other material that reasonably supports the claim.
                </p>

                <p>
                    Claims based solely on appearance, personal suspicion,
                    stylistic similarity, or an AI-detection tool result
                    without sufficient supporting evidence may not be
                    considered conclusive on their own.
                </p>

                <p>
                    Each claim will be reviewed before a refund is approved.
                    If the claim is verified and the work is found to have
                    been created by AI in violation of the agreed project
                    terms, the eligible refund will be processed within
                    <strong> 7 working days</strong> after the claim has
                    been accepted.
                </p>

                <div className="policy-fee">
                    <div className="policy-fee-icon">
                        <CreditCard size={17} />
                    </div>

                    <div>
                        <strong>$10 Payment Processing Fee</strong>

                        <p>
                            A $10 fee will be deducted from the refund to
                            cover payment processing or payment-service
                            provider charges associated with the transaction.
                        </p>
                    </div>
                </div>
            </>
        ),
    },

    {
        number: "10",
        title: "Payment Disputes & Chargebacks",
        icon: CreditCard,
        content: (
            <>
                <p>
                    Before initiating a payment dispute or chargeback,
                    clients should contact us through our official
                    communication channels so that the issue can be reviewed.
                </p>

                <p>
                    If a refund is legitimately due under these policies,
                    we will work with the client to resolve the matter
                    through the appropriate payment method.
                </p>

                <p>
                    Fraudulent, misleading, or unauthorized payment disputes
                    may be challenged with the relevant payment provider
                    using available project records and transaction
                    information.
                </p>

                <p>
                    Nothing in this section removes any rights that a client
                    may have under applicable law or the rules of their
                    payment provider.
                </p>
            </>
        ),
    },

    {
        number: "11",
        title: "Communication & Official Channels",
        icon: ShieldCheck,
        content: (
            <>
                <p>
                    All official project communication should take place
                    through the communication channels listed on our official
                    websites.
                </p>

                <p>
                    We currently operate only through our official website:
                </p>

                <div className="policy-sites">

                    <a
                        href="https://artistryworlds.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>artistryworlds.com</span>
                        <ArrowUpRight size={15} />
                    </a>
                </div>

                <p>
                    If someone asks you to bypass our official process,
                    use an unofficial payment method, or follow instructions
                    that conflict with our published process, contact our
                    official email before taking any action.
                </p>
            </>
        ),
    },

    {
        number: "12",
        title: "Policy Changes",
        icon: FileText,
        content: (
            <>
                <p>
                    We may update these policies from time to time to reflect
                    changes to our services, payment systems, business
                    processes, or applicable requirements.
                </p>

                <p>
                    The latest version published on this website will be
                    considered the current version of our general policies.
                </p>

                <p>
                    For an existing project, any specific terms already
                    agreed in writing may continue to apply to that project.
                </p>
            </>
        ),
    },
];

export default function Policies() {
    return (
        <>
            <Navbar />
            <main className="policies-page">
                <section className="policies-hero">
                    <div className="policies-hero-inner">
                        <div className="policies-label">
                            <span className="policies-label-dot" />
                            OFFICIAL POLICIES
                        </div>

                        <h1>
                            Clear terms.
                            <br />
                            <span>Clear process.</span>
                        </h1>

                        <p>
                            Please read these policies carefully before placing
                            an order or beginning a project. They explain how we
                            handle payments, projects, revisions, refunds,
                            communication, and other important matters.
                        </p>

                        <div className="policies-hero-note">
                            <ShieldCheck size={16} />

                            <span>
                                By placing an order, you acknowledge that you
                                have reviewed these policies.
                            </span>
                        </div>
                    </div>
                </section>

                <section className="policies-content">
                    <div className="policies-layout">
                        <aside className="policies-index">
                            <div className="policies-index-inner">
                                <span className="index-title">
                                    ON THIS PAGE
                                </span>

                                <div className="index-list">
                                    {policies.map((policy) => (
                                        <a
                                            key={policy.number}
                                            href={`#policy-${policy.number}`}
                                        >
                                            <span>{policy.number}</span>
                                            <span>{policy.title}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </aside>

                        <div className="policies-list">
                            {policies.map((policy) => {
                                const Icon = policy.icon;

                                return (
                                    <article
                                        key={policy.number}
                                        id={`policy-${policy.number}`}
                                        className={`policy-card ${policy.important
                                            ? "policy-card-important"
                                            : ""
                                            }`}
                                    >
                                        <div className="policy-card-top">
                                            <div className="policy-number">
                                                {policy.number}
                                            </div>

                                            <div className="policy-icon">
                                                <Icon size={18} />
                                            </div>
                                        </div>

                                        <div className="policy-card-body">
                                            <h2>{policy.title}</h2>

                                            <div className="policy-copy">
                                                {policy.content}
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section className="policies-footer">
                    <div className="policies-footer-inner">
                        <span className="policies-label">
                            <span className="policies-label-dot" />
                            NEED HELP?
                        </span>

                        <h2>
                            Something isn't clear?
                            <br />
                            <span>Contact us before proceeding.</span>
                        </h2>

                        <p>
                            If you have any questions about a project, payment,
                            refund, or our working process, please contact us
                            through the official contact information listed on
                            our websites.
                        </p>

                        <a
                            href="mailto:info@artistryworlds.com"
                            className="policies-contact"
                        >
                            <span>Contact Official Support</span>
                            <ArrowUpRight size={17} />
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}