// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type { Multilingual } from "@/i18n";

export const SITE_TITLE: string | Multilingual = "Mosaik Digital";

export const SITE_DESCRIPTION: string | Multilingual = {
	en: "Creative digital agency specializing in web development, design, and digital solutions.",
	ja: "ウェブ開発、デザイン、デジタルソリューションを専門とするクリエイティブデジタルエージェンシー。",
	"zh-cn": "专注于网页开发、设计和数字解决方案的创意数字机构。",
	ar: "وكالة رقمية إبداعية متخصصة في تطوير الويب والتصميم والحلول الرقمية.",
};

export const X_ACCOUNT: string | Multilingual = "@mosaikdigital";

export const NOT_TRANSLATED_CAUTION: string | Multilingual = {
	en: "This page is not available in your language.",
	ja: "このページはご利用の言語でご覧いただけません。",
	"zh-cn": "此页面不支持您的语言。",
	ar: "هذه الصفحة غير متوفرة بلغتك.",
};
