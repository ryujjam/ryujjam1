/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  learnSidebar: [
    {
    Introduction: [
      'intro',
      'learn/vision'
    ],
  },
  {
    Concepts: [
      'learn/protocol',
      'learn/achievement'
    ],
  },
  {
    Ecosystem: [
      'learn/products',
      'learn/networks',
    ],
  },
  'learn/hiring',
  ],
  faqSidebar: 
    ['faqs/faq'],
  devSidebar:
    ['devs/contracts'],
};

module.exports = sidebars;