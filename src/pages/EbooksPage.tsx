
import React from 'react';
import { Monitor, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ebooks } from '@/data/ebooks';
import AssistantFloatingButton from '@/components/AssistantFloatingButton';

const EbooksPage = () => {
  const openEbook = (ebook: any) => {
    window.open(ebook.link, '_blank');
  };

  return (
    <div className="min-h-screen bg-white pb-12">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold flex items-center mb-2">
            <Monitor className="mr-2 text-blue-400" />
            <span className="text-blue-400">Digital</span>
            <span className="text-black"> Library</span>
          </h1>
          <p className="text-muted-foreground">
            Access our collection of {ebooks.length} digital books instantly
          </p>
        </div>
        
        {/* E-books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {ebooks.map((ebook) => (
            <Card key={ebook.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div 
                  className="w-full h-48 bg-cover bg-center bg-no-repeat bg-gray-100"
                  style={{
                    backgroundImage: ebook.coverImage ? `url(${ebook.coverImage})` : 'none'
                  }}
                >
                  {!ebook.coverImage && (
                    <div className="flex items-center justify-center h-full w-full">
                      <Monitor className="h-12 w-12 text-gray-400" />
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1 line-clamp-2">{ebook.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{ebook.author}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {ebook.category.map((cat, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {cat}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    onClick={() => openEbook(ebook)} 
                    className="w-full"
                    size="sm"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Open E-book
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <AssistantFloatingButton />
    </div>
  );
};

export default EbooksPage;
