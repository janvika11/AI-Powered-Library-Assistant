import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useLibrary } from '@/context/LibraryContext';

const Index: React.FC = () => {
  const { borrowedBooks } = useLibrary();

  return (
    <div>
      {/* Hero section */}
      <section className="py-10 md:py-16">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="md:w-1/2 md:pr-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Discover knowledge at your fingertips
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Explore our vast collection of academic resources, textbooks, and research materials to enhance your learning journey.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/search">
                  <Button className="bg-blue-400 hover:bg-blue-500">
                    Borrow Books <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/recommendations">
                  <Button variant="outline">
                    View Recommendations
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mt-10 md:mt-0 md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
                alt="Library with books and reading space" 
                className="rounded-lg shadow-lg w-full h-64 md:h-80 lg:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Extensive Collection</h3>
              <p className="text-gray-600">Access a wide range of books, journals, and articles across various disciplines.</p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Personalized Recommendations</h3>
              <p className="text-gray-600">Get tailored book suggestions based on your interests and borrowing history.</p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Easy Borrowing</h3>
              <p className="text-gray-600">Borrow and return books with ease through our streamlined online system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action section */}
      <section className="py-14 bg-library-light">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to start exploring?</h2>
          <p className="text-gray-700 text-lg mb-8">Join our library today and unlock a world of knowledge and learning opportunities.</p>
          <Link to="/signup">
            <Button className="bg-blue-400 hover:bg-blue-500">
              Sign Up Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
