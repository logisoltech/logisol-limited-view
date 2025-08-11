/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Service redirects
      {
        source: '/services/custom-web-development-services',
        destination: '/custom-web-development-services',
        permanent: true,
      },
      {
        source: '/services/custom-web-development-services/',
        destination: '/custom-web-development-services',
        permanent: true,
      },
      {
        source: '/services/mobile-application-development-services',
        destination: '/mobile-application-development-services',
        permanent: true,
      },
      {
        source: '/services/mobile-application-development-services/',
        destination: '/mobile-application-development-services',
        permanent: true,
      },
      {
        source: '/services/seo-services-and-strategy',
        destination: '/seo-services-and-strategy',
        permanent: true,
      },
      {
        source: '/services/seo-services-and-strategy/',
        destination: '/seo-services-and-strategy',
        permanent: true,
      },
      {
        source: '/services/social-media-marketing-services',
        destination: '/social-media-marketing-services',
        permanent: true,
      },
      {
        source: '/services/social-media-marketing-services/',
        destination: '/social-media-marketing-services',
        permanent: true,
      },
      {
        source: '/services/digital-marketing-services',
        destination: '/digital-marketing-services',
        permanent: true,
      },
      {
        source: '/services/digital-marketing-services/',
        destination: '/digital-marketing-services',
        permanent: true,
      },
      {
        source: '/services/graphics-designing-services',
        destination: '/graphics-designing-services',
        permanent: true,
      },
      {
        source: '/services/graphics-designing-services/',
        destination: '/graphics-designing-services',
        permanent: true,
      },
      {
        source: '/services/professional-video-editing-services',
        destination: '/professional-video-editing-services',
        permanent: true,
      },
      {
        source: '/services/professional-video-editing-services/',
        destination: '/professional-video-editing-services',
        permanent: true,
      },
      // Page redirects
      {
        source: '/about-us-2',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/about-us-2/',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/blogs',
        permanent: true,
      },
      {
        source: '/blog/',
        destination: '/blogs',
        permanent: true,
      },
      // Legacy service redirects
      {
        source: '/services/web-development',
        destination: '/custom-web-development-services',
        permanent: true,
      },
      {
        source: '/services/web-development/',
        destination: '/custom-web-development-services',
        permanent: true,
      },
      {
        source: '/services/mobile-development-app',
        destination: '/mobile-application-development-services',
        permanent: true,
      },
      {
        source: '/services/mobile-development-app/',
        destination: '/mobile-application-development-services',
        permanent: true,
      },
      {
        source: '/services/search-engine-optimization',
        destination: '/seo-services-and-strategy',
        permanent: true,
      },
      {
        source: '/services/search-engine-optimization/',
        destination: '/seo-services-and-strategy',
        permanent: true,
      },
      {
        source: '/services/social-media-marketing-solutions',
        destination: '/social-media-marketing-services',
        permanent: true,
      },
      {
        source: '/services/social-media-marketing-solutions/',
        destination: '/social-media-marketing-services',
        permanent: true,
      },
      {
        source: '/services/digital-marketing',
        destination: '/digital-marketing-services',
        permanent: true,
      },
      {
        source: '/services/digital-marketing/',
        destination: '/digital-marketing-services',
        permanent: true,
      },
      {
        source: '/services/graphic-design',
        destination: '/graphics-designing-services',
        permanent: true,
      },
      {
        source: '/services/graphic-design/',
        destination: '/graphics-designing-services',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
  