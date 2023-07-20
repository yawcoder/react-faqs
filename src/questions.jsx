import {FaRegMoneyBillAlt,FaTruckMoving} from 'react-icons/fa';
import {BsArrowReturnLeft} from 'react-icons/bs';
import {SlEarphonesAlt} from 'react-icons/sl';

//This data was generated with ChatGPT

const questions = [
    {   
        id: 1,
        title: "payment and invoice",
        icon: <FaRegMoneyBillAlt/>,
        questions : [
          {
            id: 1,
            question: "What payment methods do you accept?",
            answer: "We accept payments via credit cards (Visa, Mastercard, American Express), bank transfers, and PayPal."
          },
          {
            id: 2,
            question: "How can I request an invoice?",
            answer: "To request an invoice, please contact our billing department at billing@example.com."
          },
          {
            id: 3,
            question: "When is the payment due?",
            answer: "The payment is due within 30 days from the invoice date."
          },
          {
            id: 4,
            question: "Can I make partial payments?",
            answer: "Yes, you can make partial payments. However, please ensure that the full amount is paid before the due date to avoid any late payment charges."
          },
          {
            id: 5,
            question: "How can I track my payment status?",
            answer: "You can track your payment status by logging into your account dashboard or contacting our support team at support@example.com."
          }
        ]
      },
      {
        id: 2,
        title: "deliveries",
        icon: <FaTruckMoving/>,
        questions : [
          {
            id: 1,
            question: "How long does the delivery process take?",
            answer: "The delivery process typically takes 3-5 business days, depending on your location and the shipping method chosen."
          },
          {
            id: 2,
            question: "Can I track my package?",
            answer: "Yes, you can track your package by using the tracking number provided in the shipping confirmation email."
          },
          {
            "id": 3,
            question: "Do you offer international shipping?",
            answer: "Yes, we offer international shipping to select countries. Please check our shipping policy for the list of eligible countries."
          },
          {
            id: 4,
            question: "What should I do if my package is damaged upon delivery?",
            answer: "If your package arrives damaged, please contact our customer support within 24 hours with photographic evidence of the damaged package."
          },
          {
            id: 5,
            question: "What happens if I'm not available to receive the delivery?",
            answer: "If you're not available at the time of delivery, the delivery service will leave a notice with instructions on how to reschedule or collect the package from their local office."
          }
        ]
      },
      {
        id: 3,
        title: "returns and crediting",
        icon: <BsArrowReturnLeft/>,
        questions: [
          {
            id: 1,
            question: "What is your return policy?",
            answer: "Our return policy allows for returns within 30 days of purchase. Items must be in their original condition with all tags attached."
          },
          {
            id: 2,
            question: "How can I initiate a return?",
            answer: "To initiate a return, please contact our customer support team or fill out the return request form on our website."
          },
          {
            id: 3,
            question: "How long does it take to process a return?",
            answer: "Once we receive your returned item, it typically takes 5-7 business days to process the return and issue a refund."
          },
          {
            id: 4,
            question: "Can I exchange an item instead of returning it for a refund?",
            answer: "Yes, we offer exchanges for eligible items. Please contact our customer support team to arrange an exchange."
          },
          {
            id: 5,
            question: "How will I be credited for my return?",
            answer: "Refunds for returns are typically credited back to the original payment method used during the purchase."
          }
        ]
      },
      {
        id: 4,
        title: "complaints",
        icon: <SlEarphonesAlt/>,
        questions: [
          {
            id: 1,
            question: "What if my question not listed here?",
            answer: "We value our customers' feedback and aim to provide the best possible service. If you have any complaints or concerns, we encourage you to reach out to our dedicated customer support team. You can contact us via email at complaints@example.com or by calling our toll-free hotline at 1-800-123-4567. Please provide detailed information regarding the nature of your complaint, including order details and any relevant supporting documentation. We will promptly investigate the matter and strive to resolve it to your satisfaction. Your feedback is important to us as we continuously improve our products and services. Thank you for bringing your concerns to our attention."
          }
        ]
      }
]

export default questions;