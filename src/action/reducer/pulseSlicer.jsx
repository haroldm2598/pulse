import { createSlice } from '@reduxjs/toolkit';

import person1 from '../../assets/images/person1.jpg';
import person2 from '../../assets/images/person2.jpg';
import person3 from '../../assets/images/person3.jpg';
import person4 from '../../assets/images/person4.jpg';

import blogImg1 from '../../assets/images/1.png';
import blogImg2 from '../../assets/images/2.png';
import blogImg3 from '../../assets/images/3.jpg';
import blogImg4 from '../../assets/images/4.png';
import blogImg5 from '../../assets/images/5.png';
import blogImg6 from '../../assets/images/6.png';
import blogImg7 from '../../assets/images/7.png';
import blogImg8 from '../../assets/images/8.png';
import blogImg9 from '../../assets/images/9.png';

const initialState = {
	isClick: false,
	navLinks: [
		{ name: 'Features', path: '/' },
		{ name: 'Customer', path: '/customer' },
		{ name: 'Pricing', path: '/pricing' },
		{ name: 'Blog', path: '/blog' }
	],
	footerLinks: [
		{ title: 'Product', links: ['Features', 'Pricing', 'Sign Up'] },
		{ title: 'Company', links: ['Customer Stories', 'About', 'Contact'] },
		{ title: 'Resources', links: ['Support', 'Blog'] }
	],
	featuresContent: [
		{
			cashflow: [
				{
					title: 'Enter your cash flow projections',
					content:
						'Add single income or expenses to your cash flow for complete control.'
				},
				{
					title: 'Automate recurring entries',
					content:
						'Reduce manual entry with powerful recurring income and expense logic.'
				},
				{
					title: 'View Detailed Transactions',
					content:
						'Add multiple lines to a single item to make your cash flow easy to understand.'
				},
				{
					title: 'Adjust past transactions',
					content:
						'If something needs to be edited, you can do that to any entry, at any time.'
				},
				{
					title: 'Dial in growth and expense curves',
					content: 'Anticipating some growth? Pulse can automate that, too.'
				},
				{
					title: 'Play with scenarios',
					content:
						'Quickly see what would happen to your bottom line by toggling income and expenses on and off.'
				}
			],
			visualize: [
				{
					title: 'Track you cash flow over any time range',
					content:
						'Monitor your cash flow by week, month, or custom date range. Check your cash on hand at the beginning of each month and view each day’s incoming and outgoing funds.'
				},

				{
					title: 'Organize cash flow into categories',
					content: 'Know where your money’s coming from and going.'
				},

				{
					title: 'Group cash flow by customer',
					content: 'Know who your best (and worst) customers will be.'
				},

				{
					title: 'Group cash flow by project',
					content: 'Quickly measure potential profitability on a project basis.'
				}
			],
			account: [
				{
					title: 'Quickbooks Online Integration',
					content:
						'Sync at any time to get the latest transactions from QuickBooks Online.'
				},

				{
					title: 'Compare actuals and projections',
					content:
						'By putting your accounting data right alongside your cash flow projections, you can compare your projections with your actual cash flow.'
				},

				{
					title: 'Less manual entry and errors',
					content:
						'With a direction connection, you don’t have to worry about messing anything up.'
				}
			],
			projections: [
				{
					title: 'Invite collaborators',
					content:
						'Share the work load with your team by inviting them to manage cash flow with you.'
				},
				{
					title: 'Share with investors',
					content:
						'We offer read-only access so you can share cash flow projections with people who don’t need to make changes.'
				},
				{
					title: 'Attach files',
					content:
						'Include proposals, invoices and contracts with transactions to audit or help evaluate income and expenses.'
				},
				{
					title: 'Export data and print reports',
					content: 'Easily export your cash flow data from Pulse to a CSV file.'
				}
			]
		}
	],
	customerContent: [
		{
			customerFeedback: [
				{
					image: person1,
					comment:
						"Casimir Loeber from RealtyNinja tells us how Pulse takes the 'fear and stress out of cash flow projection and management.",
					help: 'HOW REALTYNINJA USES PULSE TO AVOID STRESS ABOUT CASH FLOW',
					button: 'Read Case Study →'
				},
				{
					image: person2,
					comment:
						'Casimir Loeber from RealtyNinjPulse helps us monitor the heart-rate of our business and reconcile our monthly operational expenses.',
					help: 'HOW BOLDUNDERLINE USES PULSE TO STAY FINANCIALLY STRONG',
					button: 'Read Case Study →'
				},
				{
					image: person3,
					comment:
						'Pulse gives the folks at nGen Works confidence in their cash flow',
					help: 'HOW NGEN WORKS USES PULSE TO MAKE BETTER BUSINESS DECISIONS',
					button: 'Read Case Study →'
				},
				{
					image: person4,
					comment:
						'After using Pulse at his previous agency, Carl came back to Pulse because it gives him a feeling of control over his business.',
					help: 'BUREAU OF DIGITAL USES PULSE TO CONTROL CASH FLOW',
					button: 'Read Case Study →'
				}
			],
			story: [
				{
					name: 'Navid Safabakhsh,',
					comment:
						'Cash flow is king, and yet, there are no tools to properly manage it. I think Pulse is really onto something. It took me about an hour to finish entering all of my inflows and outflows and share it with the other partners. I now have a really clear idea of where I need to tighten things up to hit my goals.',
					site: 'Freshout'
				},
				{
					name: 'Scott Allen, Founder/CCO,',
					comment:
						'Pulse is perfect for those of us who are not accounting-minded and need something more automated than an Excel spreadsheet and less complicated than Quickbooks.',
					site: 'Monkeyfoot Interactive'
				},
				{
					name: 'Daryl Freier, Fine Council',
					comment:
						'Pulse is the only app that has allowed me to easily see how my cash flow changes if I add additional income or expenses and plan accordingly. I would rebuild Pulse as a spreadsheet if you guys stopped offering it.'
				},
				{
					name: 'Karin Armstrong,',
					comment:
						'Pulse is exactly the application I was looking for when I was trying to figure out how to track eight accounts in a single view. It was very difficult with Excel and beyond my accounting skills.',
					site: 'UVic.CA'
				},
				{
					name: 'Simone Lovati, founder,',
					comment:
						'Our company, which has offices in Milan, Italy and a network of more than 400 consultants worldwide, has been using Pulse for some weeks, and we love it because it’s simple and totally web-based.',
					site: 'Fashionbi.com'
				},
				{
					name: 'Niall Kearns',
					comment:
						'Thank you for developing Pulse App. I have been using Excel to manage my cash flow for years, as there was no robust online alternative available. Pulse is excellently designed and has no junk features. It’s nice and simple and does an excellent job!'
				},
				{
					name: 'Rachel,',
					comment:
						'Pulse gives me a fluid overview of my cash flow that I can not achieve using my accounting package.',
					site: 'Boost New Media'
				}
			]
		}
	],
	pricingContent: [
		{
			introPricing: [
				{
					title:
						'These are what we call the Pulse Basics. They’re what every customer gets.',
					content: [
						'Manage cash flow on a daily, weekly, monthly, or yearly basis',
						'Forecast growth with recurring income or expenses that scale automatically',
						'Works with any currency',
						'See Money In and Money Out, categorize transactions, and run helpful reports',
						'Toggle entries and accounts on and off to game out different scenarios'
					],
					info: 'Just need the Pulse Basics?',
					button: 'Get them now for $29 per month.'
				}
			],
			pricing: [
				{
					borderStyle: 'rounded-t-xl border-solid border-green-400 border-2 ',
					info: 'RECOMMENDED',
					title: 'Small Business Plan',
					price: '$59 per month',
					titleInfo: 'you get pulse basic, plus:',
					infoContent: [
						'Manage cash flow across multiple financial accounts',
						'Invite your investors, book keeper, or management team to see reports or manage cash flow',
						'Intregate with QuickBooks Online for more accurate cash flow',
						'Track your actual cash flow alongside your projected cash flow'
					],
					btn: 'Sign Up Now'
				},
				{
					borderStyle: 'my-10 border-solid border-gray-200 border-2 ',
					info: 'Complex business with mutiple financial accounts, currencies, or auditing needs?',
					title: 'Unlock Extra Features',
					price: '$89 per month',
					titleInfo: 'get it all, plus:',
					infoContent: [
						'Manage cash flow across unlimited financial accounts',
						'Convert to any currency for localized cash flow reporting and projections',
						'Attach invoices or contracts to your cash flow entries for accountability and auditing'
					],
					btn: 'Try Premium'
				}
			],
			faq: [
				{
					title: 'How does the 30-day free trial work?',
					info: 'You can use Pulse absolutely free for 30 days. After 30 days, we will charge the credit card you used when you sign up. If you choose to cancel your account before your trial ends, your card will not be charged.'
				},
				{
					title:
						'If I upgrade an existing account, do I get another free trial?',
					info: 'Brand new accounts are the only ones eligible for a 30-day free trial. If you upgrade an existing account, your credit card will be billed the new amount on the date of your next billing cycle.'
				},
				{
					title: 'What is a “Financial Account”?',
					info: 'Financial Accounts are a grouping of income and expense items that can be used for tracking or reporting purposes. They’re designed to be flexible and can be used to differentiate between bank accounts, companies, individuals or between personal and business entries.'
				},
				{
					title: 'Do I have to commit to a long-term contract?',
					info: 'No. There is no contract when you use Pulse, other than agreeing to our Terms of Service.'
				},
				{
					title: 'Will I be able to cancel my account if I don’t use Pulse?',
					info: 'Yes – you can cancel your account at any time. To cancel your account, go to your billing page and click on “Please cancel my account” at the bottom of the page. The account owner is the only one who can cancel an account. An email request to delete an account is not considered cancellation.'
				},
				{
					title: 'What types of payments do you accept?',
					info: 'We accept payments made online using Visa, Mastercard, Discover, and American Express.'
				}
			]
		}
	],
	blogContent: [
		{
			image: blogImg1,
			categories: 'Survive & Thrive',
			title:
				'Growth in a Downturn: How Arash Fayz of LA Tutoring Pivoted After An 80& Client Drop',
			description:
				"Arash Frayz of LA Tutors knew he neede to change his business model when the pandemic hit. Here's how scaled his tutoring business after an 80% drop in clients",
			btn: 'Read More →'
		},
		{
			image: blogImg2,
			categories: 'Entrepreneurship',
			title:
				'Monetizing a Network: How Jodie BRandstetter Started Her Second Business',
			description:
				"STEM talent consultant Jodie Brandstetter started her second business during the pandemic-a business book publishing network. Here's how she made it work.",
			btn: 'Read More →'
		},
		{
			image: blogImg3,
			categories: 'Pro Tips',
			title:
				'5 Steps to Optimizing A Services Business from Brogan REnshaw Founder of FireWire Digital',
			description:
				"Brogan Renshaw filled a gap in his local market by starting an SEO agency, FireWire Ditigal. Here's what he's learned from niching down and streamlining his business.",
			btn: 'Read More →'
		},
		{
			image: blogImg4,
			categories: 'Small Business',
			title:
				'5 Cash Flow Tips and Business Insights for Self-Employed Millenials from Justin Green CFP',
			description:
				"Justin Green is a fiduciary financial planner for Millenials. Here's how he built his business to fit the market's needs. plus his cash flow tips for small business owners.",
			btn: 'Read More →'
		},
		{
			image: blogImg5,
			categories: 'Entrepreneurship',
			title:
				'Starting a Services Business: Tips from Writer Nicole Rollender of Strang Writing Services',
			description:
				"Nicole Rollender started Strand Writing Servicces back in 2018, and, since then. her business has only grown. Now she's learning to keep her business and her work ethic sustainable",
			btn: 'Read More →'
		},
		{
			image: blogImg6,
			categories: 'Business',
			title:
				'Steamline Your Operations for Success: How Jonathan Saeidian Went From $2,000 to a 7-Figure Business',
			description:
				"Jonathan Saeidian started Brenton Way with $2,000. Now his marketing agency is a 7-figure business. Here's how he did it.",
			btn: 'Read More →'
		},
		{
			image: blogImg7,
			categories: 'Small Business',
			title:
				'Balancing Your Side-Hustle and Full-Time Gig: How Greg Marano Juggles Teaching and Freelacing',
			description:
				"Greg Marano is an English teacher and a resume writer who's passionate about both lines of work. Here is how he manages his side-hustle.",
			btn: 'Read More →'
		},
		{
			image: blogImg8,
			categories: 'Entrepreneurship',
			title:
				'Big Goals and Basic Cash Flow: How Isaac Mashman Built His Top-Rated PR Firm',
			description:
				'Isaac Mashman of Mashman Ventures rapidly grew his PR business during the pandemic by following his gut. Learn how going against the grain and developing a solid team made all the difference.',
			btn: 'Read More →'
		},
		{
			image: blogImg9,
			categories: 'Business',
			title:
				'How Ryan David of We buy Houses Pennsylvania Launched and Grew his Business',
			description:
				'Cash flow can make or break a real estate business. Learn what one investor does to stay cash positive.',
			btn: 'Read More →'
		}
	]
};

const dataSlice = createSlice({
	name: 'pulse',
	initialState,
	reducers: {
		handleClick: (state, action) => {
			state.isClick = !action.payload;
		}
	}
});

export const { handleClick } = dataSlice.actions;
export default dataSlice.reducer;
