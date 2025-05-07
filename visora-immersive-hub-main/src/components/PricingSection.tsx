
import { motion } from 'framer-motion';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
// Removed incorrect pound import

const PricingSection = () => {
  return (
    <section id="pricing" className="min-h-screen py-20 relative">
      <div className="visora-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Pricing Options</h2>
          <p className="section-subheading">Flexible plans for every business need</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Table className="w-full glass-panel border-separate border-spacing-0">
            <TableHeader>
              <TableRow>
                <TableHead className="text-visora-light font-fashion-heavy w-1/4">PRICING COMPONENT</TableHead>
                <TableHead className="text-visora-light font-fashion-heavy w-1/4">PLAN/ SERVICE</TableHead>
                <TableHead className="text-visora-light font-fashion-heavy w-1/3">FEATURES</TableHead>
                <TableHead className="text-visora-light font-fashion-heavy w-1/6">PRICE</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Integration & Setup */}
              <TableRow className="bg-visora-pink-light/10">
                <TableCell className="font-fashion-heavy">Custom Integration & Setup Fees</TableCell>
                <TableCell>Standard Integration</TableCell>
                <TableCell>Basic colour customization, product upload assistance (Excludes Custom 3D Product Modelling).</TableCell>
                <TableCell>£5,000-£15,000</TableCell>
              </TableRow>
              <TableRow className="bg-visora-pink-deep/5">
                <TableCell></TableCell>
                <TableCell>Advanced Integration</TableCell>
                <TableCell>Full branding integration, custom runway animations, product upload assistance, complex API integrations (Includes Custom 3D Product Modeling)</TableCell>
                <TableCell>£15,000-£50,000</TableCell>
              </TableRow>

              {/* Subscription Plans */}
              <TableRow className="bg-visora-pink-light/10">
                <TableCell className="font-fashion-heavy">Subscription-Based Model</TableCell>
                <TableCell>Basic Plan</TableCell>
                <TableCell>10-20 product uploads, 360 degree views, standard AR try-on, email support. (No analytics).</TableCell>
                <TableCell>£200-£600/month</TableCell>
              </TableRow>
              <TableRow className="bg-visora-pink-deep/5">
                <TableCell></TableCell>
                <TableCell>Professional Plan</TableCell>
                <TableCell>20-100 product uploads, advanced AR customization, 360, detailed analytics, API integration.</TableCell>
                <TableCell>£1,000-£2,500/month</TableCell>
              </TableRow>
              <TableRow className="bg-visora-pink-light/10">
                <TableCell></TableCell>
                <TableCell>Enterprise Plan</TableCell>
                <TableCell>Unlimited uploads, 70% discount on 3D modelling, Full customization, early access to new features.</TableCell>
                <TableCell>£4,000+/month</TableCell>
              </TableRow>

              {/* Additional Services */}
              <TableRow className="bg-visora-pink-deep/5">
                <TableCell className="font-fashion-heavy">Additional Services</TableCell>
                <TableCell>Data Analytics</TableCell>
                <TableCell>Customer insights, conversion rate analysis. Price based on data amount.</TableCell>
                <TableCell>£400-£2,000</TableCell>
              </TableRow>
              <TableRow className="bg-visora-pink-light/10">
                <TableCell></TableCell>
                <TableCell>Custom 3D Product Modelling</TableCell>
                <TableCell>If brands do not have their own 3D assets.</TableCell>
                <TableCell>£50-£500/model</TableCell>
              </TableRow>
              <TableRow className="bg-visora-pink-deep/5">
                <TableCell></TableCell>
                <TableCell>Premium Support & Maintenance</TableCell>
                <TableCell>Faster response times, troubleshooting, and feature updates.</TableCell>
                <TableCell>£300+/month</TableCell>
              </TableRow>
              <TableRow className="bg-visora-pink-light/10">
                <TableCell></TableCell>
                <TableCell>Staff Training</TableCell>
                <TableCell>Training for non-subscription users to maintain the interface.</TableCell>
                <TableCell>£1,000-£10,000</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
