import { createFileRoute } from "@tanstack/react-router";
import dedent from "dedent";
import Markdown from "react-markdown";

export const Route = createFileRoute("/privacy")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="py-80">
			<div className="prose prose-lg max-w-none [&>h1]:text-[2.5rem]">
				<Markdown>
					{dedent`
						# Privacy Policy for LucasOe’s Portfolio

						For this portfolio, accessible at https://lucasoe.com/, one of my main
						priorities is the privacy of my visitors. This Privacy Policy document contains
						types of information that is collected and recorded on this portfolio and how I
						use it. If you have additional questions or require more information about this
						Privacy Policy, do not hesitate to contact me through the contact form at
						[https://lucasoe.com/#contact](https://lucasoe.com/#contact).

						If you choose to use our Service, then you agree to the collection and use of
						information in relation with this policy. The Personal Information that I
						collect are used for providing and improving the Service. I will not use or
						share your information with anyone except as described in this Privacy Policy.

						## Personal Data

						The personal information that you are asked to provide, and the reasons why you
						are asked to provide it, will be made clear to you at the point I ask you to
						provide your personal information.

						If you contact me directly, I may receive additional information about you such
						as your name, email address the contents of the message and/or attachments you
						may send us, and any other information you may choose to provide.

						## How I use your information

						I use the information I collect in various ways, including to:

						- Provide, operate, and maintain this website
						- Improve, personalize, and expand this website
						- Understand and analyze how you use our website
						- Develop new products, services, features, and functionality
						- Communicate with you, either directly or through one of our partners,
						including for customer service, to provide you with updates and other
						information relating to the webste, and for marketing and promotional purposes
						- Send you emails
						- Find and prevent fraud

						I may employ third-party companies and individuals due to one of the reasons
						listed above. I want to inform users that these third parties have access to
						your Personal Information. The reason is to perform the tasks assigned
						to them on my behalf. However, they are obligated not to disclose or use the
						information for any other purpose.

						## Log Files

						This portfolio follows a standard procedure of using log files. These files log
						visitors when they visit websites. All hosting companies do this and a part of
						hosting services’ analytics. The information collected by log files include
						internet protocol (IP) addresses, browser type, Internet Service Provider (ISP),
						date and time stamp, referring/exit pages, and possibly the number of clicks.
						These are not linked to any information that is personally identifiable. The
						purpose of the information is for analyzing trends, administering the site,
						tracking users' movement on the website, and gathering demographic information.

						## Links to Other Sites

						Our Service may contain links to other sites. If you click on a third-party
						link, you will be directed to that site. Note that these external sites are not
						operated by us. Therefore, we strongly advise you to review the Privacy Policy
						of these websites. We have no control over, and assume no responsibility for the
						content, privacy policies, or practices of any third-party sites or services.

						## Third Party Privacy Policies

						This portfolios Privacy Policy does not apply to other websites.
						Thus, I advise you to consult the respective Privacy Policies of these
						third-party servers for more detailed information. It may include their
						practices and instructions about how to opt-out of certain options.

						## CCPA Privacy Rights (Do Not Sell My Personal Information)

						Under the CCPA, among other rights, California consumers have the right to:

						Request that a business that collects a consumer’s personal data disclose the
						categories and specific pieces of personal data that a business has collected
						about consumers.

						Request that a business delete any personal data about the consumer that a
						business has collected.

						Request that a business that sells a consumer’s personal data, not sell the
						consumer’s personal data.

						If you make a request, I have one month to respond to you. If you would like to
						exercise any of these rights, please contact me.

						## GDPR Data Protection Rights

						I would like to make sure you are fully aware of all of your data protection
						rights. Every user is entitled to the following:

						The right to access – You have the right to request copies of your personal
						data.

						The right to rectification – You have the right to request that I correct any
						information you believe is inaccurate. You also have the right to request that
						I complete the information you believe is incomplete.

						The right to erasure – You have the right to request that I erase your personal
						data, under certain conditions.

						The right to restrict processing – You have the right to request that I restrict
						the processing of your personal data, under certain conditions.

						The right to object to processing – You have the right to object to my
						processing of your personal data, under certain conditions.

						The right to data portability – You have the right to request that I transfer
						the data that I have collected to another organization, or directly to you,
						under certain conditions.

						If you make a request, I have one month to respond to you. If you would like to
						exercise any of these rights, please contact me.

						## Children’s Information

						Another part of our priority is adding protection for children while using the
						internet. I encourage parents and guardians to observe, participate in, and/or
						monitor and guide their online activity.

						This portfolio does not knowingly collect any Personal Identifiable Information
						from children under the age of 13. If you think that your child provided this
						kind of information on our website, I strongly encourage you to contact me
						immediately and I will do our best efforts to promptly remove such information
						from my records.
					`}
				</Markdown>
			</div>
		</main>
	);
}
