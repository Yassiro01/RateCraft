import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowLeft, Share2, Twitter, Linkedin } from 'lucide-react';

const postData = {
  'how-to-calculate-freelance-rate': {
    title: 'How to Calculate Your Freelance Rate: The Ultimate Guide',
    date: 'March 25, 2026',
    readTime: '8 min read',
    category: 'Strategy',
    image: 'https://picsum.photos/seed/rate/1200/600',
    content: `
      <p>Determining your freelance rate is one of the most stressful parts of starting a business. Charge too much, and you fear losing the client. Charge too little, and you're working yourself to the bone for pennies.</p>
      
      <h3>The "Salary Replacement" Fallacy</h3>
      <p>Many new freelancers take their previous salary, divide it by 2,000 hours, and call it a day. This is a massive mistake. As a freelancer, your rate needs to cover:</p>
      <ul>
        <li>Self-employment taxes (usually an extra 7-15%)</li>
        <li>Health, dental, and vision insurance</li>
        <li>Software subscriptions and hardware upgrades</li>
        <li>Unpaid time (marketing, admin, sales)</li>
        <li>Retirement savings</li>
      </ul>

      <h3>The Formula for Success</h3>
      <p>The most sustainable way to calculate your rate is to work backward from your desired lifestyle. Start with your target net income, add your business expenses, and then factor in your tax burden.</p>
      
      <p>Once you have your total gross requirement, divide it by your <strong>actual billable hours</strong>—not 40 hours a week, but the 20-25 hours you actually spend on client work.</p>

      <blockquote>
        "Pricing is not just about math; it's about the value you provide and the lifestyle you want to sustain."
      </blockquote>

      <h3>Conclusion</h3>
      <p>Don't be afraid to charge what you're worth. High-quality clients value reliability and expertise over the lowest price. Use tools like RateCraft to stay grounded in the math, and then add a premium for your unique skills.</p>
    `
  },
  'hidden-costs-of-freelancing': {
    title: '5 Hidden Costs of Freelancing You Probably Forgot',
    date: 'March 18, 2026',
    readTime: '5 min read',
    category: 'Finance',
    image: 'https://picsum.photos/seed/costs/1200/600',
    content: `
      <p>When you start freelancing, it's easy to focus on the hourly rate. But if you don't account for the hidden costs of running a business, you might find yourself earning less than you did at your 9-to-5.</p>
      
      <h3>1. Self-Employment Tax</h3>
      <p>In many countries, employers pay a portion of your social security and medicare taxes. When you're the employer, you pay both halves. This can be a significant chunk of your income that you need to set aside immediately.</p>
      
      <h3>2. Software and Subscriptions</h3>
      <p>Adobe Creative Cloud, Slack Pro, Zoom, accounting software, CRM tools—these $20-50 monthly charges add up quickly. If you aren't careful, you could be spending hundreds of dollars a month just to keep the lights on.</p>
      
      <h3>3. Non-Billable Time</h3>
      <p>For every hour you spend designing or coding, you likely spend 30 minutes on admin, invoicing, and finding new clients. If you don't factor this "overhead" into your rate, you're essentially working those hours for free.</p>
      
      <h3>4. Equipment and Maintenance</h3>
      <p>Your laptop will eventually break. Your camera will need a new lens. Your office chair will wear out. Setting aside a "depreciation fund" ensures you have the cash ready when your essential tools need replacing.</p>
      
      <h3>5. Professional Development</h3>
      <p>To stay competitive, you need to keep learning. Courses, books, and conferences aren't just "fun extras"—they are essential investments in your future earning potential.</p>
    `
  },
  'raising-your-rates': {
    title: 'When and How to Raise Your Rates for Existing Clients',
    date: 'March 10, 2026',
    readTime: '6 min read',
    category: 'Business',
    image: 'https://picsum.photos/seed/raise/1200/600',
    content: `
      <p>Raising your rates is a natural part of business growth, yet it's the conversation freelancers dread most. Here's how to navigate it without losing your best clients.</p>
      
      <h3>Timing is Everything</h3>
      <p>Don't wait until you're resentful of the low pay to ask for more. The best times to raise rates are:</p>
      <ul>
        <li>At the start of a new year</li>
        <li>After a major successful project or milestone</li>
        <li>When your schedule is consistently full</li>
        <li>When you've gained a significant new skill or certification</li>
      </ul>

      <h3>The "Value-First" Approach</h3>
      <p>Instead of saying "I need more money because my rent went up," focus on the increased value you're providing. Mention the results you've delivered over the past year and how your deepened understanding of their business makes you more efficient.</p>

      <h3>Give Plenty of Notice</h3>
      <p>Never spring a rate increase on a client for a project that's already started. Give at least 30-60 days' notice so they can adjust their budgets accordingly.</p>

      <blockquote>
        "A rate increase is a signal of growth, not a penalty for your clients."
      </blockquote>

      <h3>What if they say no?</h3>
      <p>Be prepared for some pushback. If a client can't meet your new rate, you can offer to reduce the scope of work or transition them to a different service level. Ultimately, if a client can't afford your market value, they may no longer be a good fit for your growing business.</p>
    `
  }
};

export default function BlogPost() {
  const { id } = useParams();
  const post = postData[id as keyof typeof postData];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link to="/blog" className="text-brand-600 hover:underline">Back to blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <SEO title={`${post.title} | RateCraft Blog`} />
      
      <main>
        <article className="pb-24">
          {/* Header */}
          <header className="pt-16 pb-12 px-4 max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-brand-600 mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to blog
            </Link>
            
            <div className="flex items-center gap-4 text-xs font-medium text-slate-400 mb-4">
              <span className="px-2 py-1 bg-brand-50 text-brand-600 rounded-md uppercase tracking-wider">{post.category}</span>
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
              {post.title}
            </h1>
          </header>

          {/* Featured Image */}
          <div className="max-w-6xl mx-auto px-4 mb-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-[21/9] rounded-[2rem] overflow-hidden border border-slate-200 shadow-2xl"
            >
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* Content */}
          <div className="max-w-3xl mx-auto px-4">
            <div 
              className="prose prose-slate prose-lg prose-brand max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Share */}
            <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-slate-900">Share this article:</span>
                <div className="flex gap-2">
                  <button className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-brand-50 hover:text-brand-600 transition-all">
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-brand-50 hover:text-brand-600 transition-all">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-brand-50 hover:text-brand-600 transition-all">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <Link 
                to="/calculator"
                className="px-6 py-3 bg-brand-600 text-white rounded-full font-bold text-sm hover:bg-brand-700 transition-all shadow-lg shadow-brand-200"
              >
                Try the Calculator
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
