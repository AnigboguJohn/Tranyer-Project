import Layout from '@/components/layout/Layout';
import { RotateCcw, CheckCircle, XCircle, Clock, Package } from 'lucide-react';

const Returns = () => {
  return (
    <Layout>
      <div className="container py-12 max-w-4xl">
        <div className="text-center mb-12">
          <RotateCcw className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="font-display text-4xl font-bold mb-4">Returns & Refunds</h1>
          <p className="text-xl text-muted-foreground">
            Easy returns within 7 days of delivery
          </p>
        </div>

        {/* Return Policy */}
        <div className="bg-card rounded-xl border p-8 mb-8">
          <h2 className="font-display text-2xl font-bold mb-6">Return Policy</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <Clock className="w-6 h-6 text-primary shrink-0" />
              <div>
                <h3 className="font-bold mb-1">7-Day Return Window</h3>
                <p className="text-muted-foreground">
                  You can return most items within 7 days of delivery for a full refund.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Package className="w-6 h-6 text-primary shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Original Packaging Required</h3>
                <p className="text-muted-foreground">
                  Items must be returned in their original packaging with all tags attached.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Eligible Items */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 dark:bg-green-950/20 rounded-xl p-6 border border-green-200 dark:border-green-900">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <h3 className="font-display text-lg font-bold">Eligible for Return</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Unused items in original packaging</li>
              <li>• Defective or damaged products</li>
              <li>• Wrong item delivered</li>
              <li>• Electronics with warranty issues</li>
              <li>• Clothing and accessories with tags</li>
            </ul>
          </div>
          <div className="bg-red-50 dark:bg-red-950/20 rounded-xl p-6 border border-red-200 dark:border-red-900">
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="w-6 h-6 text-red-600" />
              <h3 className="font-display text-lg font-bold">Not Eligible for Return</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Perishable goods (food, beverages)</li>
              <li>• Personal care products (opened)</li>
              <li>• Undergarments and swimwear</li>
              <li>• Customized or personalized items</li>
              <li>• Digital products and gift cards</li>
            </ul>
          </div>
        </div>

        {/* How to Return */}
        <div className="bg-muted rounded-xl p-8">
          <h2 className="font-display text-2xl font-bold mb-6">How to Return an Item</h2>
          <ol className="space-y-4">
            <li className="flex gap-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">1</span>
              <div>
                <h3 className="font-bold">Initiate Return Request</h3>
                <p className="text-muted-foreground">Log in to your account and go to Order History to start a return.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">2</span>
              <div>
                <h3 className="font-bold">Pack the Item</h3>
                <p className="text-muted-foreground">Pack the item securely in its original packaging.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">3</span>
              <div>
                <h3 className="font-bold">Schedule Pickup or Drop Off</h3>
                <p className="text-muted-foreground">Choose pickup from your location or drop off at a designated point.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">4</span>
              <div>
                <h3 className="font-bold">Receive Refund</h3>
                <p className="text-muted-foreground">Refund will be processed within 5-7 business days after we receive the item.</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </Layout>
  );
};

export default Returns;
