'use client'

import { useState } from 'react'

const reviews = [
  {
    id: 1,
    name: 'Khyati Thaker',
    image: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/testimonials/khyati-thaker-16322aafe1d804.jpg',
    googleLink: 'https://g.co/kgs/h3t6cGK',
    rating: 5,
    review:
      "It has been 3 years of working with Aarav Infotech. I strongly recommend their services. They are prompt, responsive with their tech support. All the team members are very professional and polite. My special thanks to Sohail from the tech team, who has always been super-efficient and prompt with the solutions. You'll never hear a 'no' from him for any work. I sincerely hope to continue with their professional services for many years to come! Strongly recommended.",
  },
  {
    id: 2,
    name: 'Sukhda Trivedi',
    image: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/testimonials/sukhda-trivedi-1631c75f374e99.png',
    googleLink: 'https://g.co/kgs/7v2y9n4',
    rating: 5,
    review:
      'I want to say thanks to Team AI from bottom of my heart, specially Miss Jaya and Mr. ashish from support team immediately they helped me in saving my website, i must say you all are very quick and professional. your all plans are very cost effective.',
  },
  {
    id: 3,
    name: 'BHART SINGH',
    image: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/testimonials/bhart-singh-16322b921c8181.jpg',
    googleLink: 'https://g.co/kgs/NnWHKEp',
    rating: 5,
    review:
      'Hello everyone, I know its a difficult task to find someone who can manage all issues related to your website at a affordable price. My experience with Aarav Infotech is really good. They solved all website problem as soon as possible. Staff is really good and dedicated to give best services to customer. Thank you Aarav Infotech',
  },
  {
    id: 4,
    name: 'Vivaah Shastra',
    image: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/testimonials/vivaah-shastra-1631c79613bdca.png',
    googleLink: 'https://g.co/kgs/fnP72Mr',
    rating: 5,
    review:
      'Understanding Customer requirements and engaging through powerful communication tools has been the strength of Aarav Infotech" We have been working with them for past 6 months and the service provided by them is commendable . On time service and efficient staff. No issue that they cannot resolve. Kudos to the team!!',
  },
  {
    id: 5,
    name: 'Vishal dafale',
    image: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/testimonials/vishal-dafale-16322b05f1d322.jpeg',
    googleLink: 'https://g.co/kgs/Wd9FXcs',
    rating: 5,
    review:
      'Thanks to your company(Aarav Infotech) and the excellent service provided by your delightful employees. I would love to recommend your company to anyone who needs in the future.',
  },
  {
    id: 6,
    name: 'Mrunalini Bankar',
    image: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/testimonials/info-rishainfra-16322b1f207059.jpg',
    googleLink: 'https://g.co/kgs/jQbKdc9',
    rating: 5,
    review:
      'Availing their services for more than 4 years now. fully satisfied. All the team members are helpful. Would highly recommend Aarav Infotech for their services. Great Team, Professionals & Masters in their fld.',
  },
  {
    id: 7,
    name: 'Anjali Rawat',
    image: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/testimonials/anjali-rawat-1631c7a30e8173.png',
    googleLink: 'https://g.co/kgs/jg2a5u3',
    rating: 5,
    review:
      'I will recommend Aarav Infotech as they provide great service and support team. Will definitely do more and more business with them in future. Highly recommend.',
  },
  {
    id: 8,
    name: 'Aditi Sirdeshpande',
    image: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/testimonials/aditi-sirdeshpande-1670d128c4611c.png',
    googleLink: 'https://g.co/kgs/AK86gW2',
    rating: 5,
    review: 'thoroughly impressed with their quick turn around time. Great team!',
  },
  {
    id: 9,
    name: 'HARI KRUSHNA SAHU',
    image: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/testimonials/hari-krushna-sahu-1631c7b80a8414.png',
    googleLink: 'https://g.co/kgs/zYuxkef',
    rating: 5,
    review:
      "Having a personal webmaster on-call is priceless. Anytime I need a website change, he's just a phone call or email away. Aarav Infotech team is the real deal.",
  },
  {
    id: 10,
    name: 'Manoj Choudhury',
    image: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/testimonials/ojb-engg-1670d122b27f7c.png',
    googleLink: 'https://g.co/kgs/T7GcjVU',
    rating: 5,
    review:
      'Arav team understands our requirements very well and always there to support us with new ideas. I found CRM as very useful and user friendly. Thank you Arav Infotech !!',
  },
  {
    id: 11,
    name: 'Zenal Gomes',
    image: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/testimonials/zenal-gomes-1670d12116e1af.png',
    googleLink: 'https://g.co/kgs/TU9b6JC',
    rating: 5,
    review: 'Very prompt onsite/online service response. Professional staff and directors. All IT solutions guaranteed. Highly recommendable.',
  },
  {
    id: 12,
    name: 'Dinesh Surti',
    image: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/testimonials/dinesh-surti-1631c88ea57aae.png',
    googleLink: 'https://g.co/kgs/K5e1FDa',
    rating: 4.5,
    review:
      'Aarav co we are using since 10 years and we find them they are very proffessional and good in services. Also they some software to maintain data are superb.',
  },
  {
    id: 13,
    name: 'shruti shirsat',
    image: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/testimonials/shruti-shirsat-1670d11f69fbf3.png',
    googleLink: 'https://g.co/kgs/xrcQzGh',
    rating: 5,
    review: 'These people are very professional. Whenever I call them there is an immediate response. I m very happy with their services.',
  },
  {
    id: 14,
    name: 'Yogesh Bulchandani',
    image: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/testimonials/yogesh-bulchandani-16322c11ea47f1.jpg',
    googleLink: 'https://g.co/kgs/fJQu7aA',
    rating: 5,
    review: 'They do a great job. Thanks to Aarav Infotech.',
  },
  {
    id: 15,
    name: 'Ashish Thakare',
    image: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/testimonials/dnh-secheron-16322c1df833d9.png',
    googleLink: 'https://g.co/kgs/CBfYyA3',
    rating: 5,
    review: 'Good experience. Keep it up.',
  },
  {
    id: 16,
    name: 'Bhadresh Joshi',
    image: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/testimonials/jay-ambe-industries-bhadresh-16322c2a9a98af.jpg',
    googleLink: 'https://g.co/kgs/T9UGcE4',
    rating: 5,
    review: 'Best prompt Service.',
  },
]

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const shouldShowReadMore = review.review.length > 150

  return (
    <div className="ti-review-item source-Google ti-image-layout-thumbnail">
      <div className="ti-inner">
        <div className="ti-review-header mb-10px">
          <div className="ti-profile-img">
            <img alt={review.name} src={review.image} className="round-image" decoding="async" />
          </div>
          <div className="ti-profile-details">
            <div className="ti-name">
              <a
                href={review.googleLink}
                className="text-decoration-line-bottom"
                target="_blank"
                rel="noopener"
              >
                {review.name}
              </a>
            </div>
            <div className="review-star-icon fs-17 lh-20 d-block">
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className={`bi ${i < Math.floor(review.rating) ? 'bi-star-fill' : i < review.rating ? 'bi-star-half' : 'bi-star'}`}
                  style={{ color: '#fbbf24' }}
                ></i>
              ))}
            </div>
          </div>
        </div>
        <div
          className={`ti-review-text-container ti-review-content ${isExpanded ? '' : 'ti-review-collapsed'}`}
          style={
            isExpanded
              ? {}
              : {
                  height: '68px',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  overflow: 'hidden',
                  WebkitBoxOrient: 'vertical',
                }
          }
        >
          {review.review}
        </div>
        {shouldShowReadMore && (
          <span
            className="ti-read-more"
            onClick={() => setIsExpanded(!isExpanded)}
            style={{ cursor: 'pointer' }}
          >
            <span className="ti-read-more-active">{isExpanded ? 'Hide' : 'Read more'}</span>
          </span>
        )}
      </div>
    </div>
  )
}

export default function ReviewsSection() {
  const [visibleCount, setVisibleCount] = useState(12)

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, reviews.length))
  }

  return (
    <section id="reviews" className="py-20 pb-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="row justify-content-center mb-3">
          <div className="col-xl-7 col-lg-7 col-md-10 text-center">
            <span className="ps-25px pe-25px mb-20px text-uppercase text-base-color fs-14 lh-42px fw-700 border-radius-100px bg-gradient-very-light-gray-transparent d-inline-block">
              4.9/5 Stars | 1000+ Websites Protected
            </span>
            <h3 className="text-dark-gray fw-700 ls-minus-1px text-3xl md:text-4xl lg:text-4xl mt-4">
              Trusted Website Guardians Since 2010
            </h3>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="row">
          <div className="col-md-12">
            <div className="ti-widget-container ti-col-4">
              <div className="ti-reviews-container">
                <div className="ti-reviews-container-wrapper">
                  {reviews.slice(0, visibleCount).map((review) => (
                    <ReviewCard key={review.id} review={review} />
                  ))}
                </div>
                {visibleCount < reviews.length && (
                  <div className="ti-load-more-reviews-container">
                    <div className="ti-load-more-reviews-button" onClick={handleLoadMore}>
                      Load more
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
