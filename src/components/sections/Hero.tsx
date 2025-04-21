import React, { ReactNode, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ScrollIndicator from './ScrollIndicator';

interface AnimatedButtonProps {
  children: ReactNode;
  href: string;
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  className?: string;
}

// Custom animated button component
const AnimatedButton = ({ children, href, variant = "default", className = "" }: AnimatedButtonProps) => {
  return (
    <Link href={href}>
      <motion.div
        className="relative"
        whileHover="hover"
        initial="initial"
      >
        {/* Button shadow effect */}
        <motion.div 
          className={`absolute -inset-1 rounded-md ${variant === "default" ? "bg-brand-green-700" : "bg-white/5"} z-0`}
          variants={{
            initial: { opacity: 0, y: 0 },
            hover: { 
              opacity: 0.5, 
              y: 4,
              transition: { duration: 0.3 } 
            }
          }}
        />
        
        {/* The actual button */}
        <motion.div
          className={`relative z-10 ${className}`}
          variants={{
            hover: { 
              y: -4,
              transition: { 
                duration: 0.3,
                type: "spring", 
                stiffness: 400
              }
            },
            initial: { y: 0 }
          }}
        >
          <Button 
            size="lg" 
            variant={variant} 
            className={`group ${variant === "outline" ? "text-white border-white hover:bg-white/10" : ""}`}
          >
            {children}
          </Button>
        </motion.div>
      </motion.div>
    </Link>
  );
};

// Plant component that grows based on cursor proximity
const Plant = ({ x, y, index, mouseX, mouseY }: { 
  x: number, 
  y: number, 
  index: number,
  mouseX: MotionValue<number>,
  mouseY: MotionValue<number>
}) => {
  // Calculate distance from mouse to determine growth
  const distance = useTransform<number, number>(
    [mouseX, mouseY] as any, // Cast as any to work around type limitations
    (latest: number[]) => {
      const dx = latest[0] - x;
      const dy = latest[1] - y;
      return Math.sqrt(dx * dx + dy * dy);
    }
  );

  // Transform distance to growth scale
  const scale = useTransform(distance, [0, 300], [1.5, 0.8]);
  const scaleSpring = useSpring(scale, { damping: 20, stiffness: 300 });
  
  // Colors based on plant type (vary between plants)
  const plantTypes = [
    { color: 'bg-brand-green-400', height: 'h-16', delay: 0 },
    { color: 'bg-brand-green-500', height: 'h-20', delay: 0.1 },
    { color: 'bg-brand-green-600', height: 'h-14', delay: 0.2 },
    { color: 'bg-green-300', height: 'h-18', delay: 0.15 },
    { color: 'bg-green-400', height: 'h-12', delay: 0.05 },
  ];
  
  const plantType = plantTypes[index % plantTypes.length];
  
  return (
    <motion.div 
      className="absolute bottom-0 origin-bottom"
      style={{ 
        left: x, 
        scaleY: scaleSpring,
        scaleX: useTransform(scaleSpring, (s: number) => Math.max(1, s * 0.8))
      }}
      initial={{ height: 0 }}
      animate={{ height: 'auto' }}
      transition={{ delay: index * 0.02 + plantType.delay, duration: 0.8 }}
    >
      <motion.div 
        className={`w-1 ${plantType.height} rounded-t-full ${plantType.color}`}
        style={{
          transformOrigin: 'bottom' 
        }}
      />
      {index % 3 === 0 && (
        <motion.div 
          className="absolute -top-4 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-yellow-300"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ delay: index * 0.02 + plantType.delay + 0.4, duration: 1 }}
        />
      )}
    </motion.div>
  );
};

export default function Hero() {
  // Mouse position values for interaction
  const mouseX = useMotionValue<number>(0);
  const mouseY = useMotionValue<number>(0);
  
  // Plants array to render (positions will be calculated)
  const [plants, setPlants] = useState<{x: number, y: number, index: number}[]>([]);
  
  // Handle mouse move to update position values
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };
  
  // Generate plants on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      const plantsArray = [];
      
      // Create plants distributed across the bottom of the hero
      for (let i = 0; i < 44; i++) {
        plantsArray.push({
          x: Math.random() * width,
          y: window.innerHeight - 100 + Math.random() * 50,
          index: i,
        });
      }
      
      setPlants(plantsArray);
    }
  }, []);

  return (
    <section 
      className="relative h-[90vh] min-h-[600px] bg-gradient-to-br from-brand-green-900 to-brand-green-800 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background shapes */}
      <div className="absolute inset-0 opacity-30">
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-brand-green-600 blur-3xl"
          animate={{ 
            x: [0, 40, 0],
            y: [0, 30, 0],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-10 right-20 w-80 h-80 rounded-full bg-brand-green-700 blur-3xl"
          animate={{ 
            x: [0, -30, 0],
            y: [0, -40, 0],
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      {/* Interactive plant garden */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none">
        {/* Ground base */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-brand-green-800/80 to-transparent" />
        
        {/* Plants that respond to mouse position */}
        {plants.map((plant) => (
          <Plant 
            key={plant.index}
            x={plant.x}
            y={plant.y}
            index={plant.index}
            mouseX={mouseX}
            mouseY={mouseY}
          />
        ))}

        {/* Sun that follows mouse */}
        <motion.div
          className="absolute w-40 h-40 rounded-full bg-gradient-to-r from-yellow-200 to-yellow-400 opacity-25 blur-xl pointer-events-none"
          style={{
            x: useTransform<number, number>(mouseX, value => value - 20),
            y: useTransform<number, number>(mouseY, value => value - 20)
          }}
        />
      </div>

      <div className="relative h-full container-custom flex flex-col justify-center">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Transform Your Outdoor Space
          </motion.h1>
          
          <motion.p 
            className="text-xl text-brand-green-50 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Dallas's premier landscaping service, bringing nature-inspired designs to life since 2019. From lush gardens to elegant walkways, we craft spaces you'll love to live in.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <AnimatedButton href="/contact">
              Get a Free Quote
              <motion.span
                className="inline-block ml-2"
                variants={{
                  initial: { x: 0 },
                  hover: { 
                    x: 5,
                    transition: { 
                      type: "spring", 
                      stiffness: 400,
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 0.8
                    } 
                  }
                }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </AnimatedButton>
            
            <AnimatedButton href="/projects" variant="outline">
              View Our Projects
            </AnimatedButton>
          </motion.div>
          
          <motion.div 
            className="mt-16 flex items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div 
              className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <p className="text-white/90 text-sm font-medium">5-Star Rated</p>
              <div className="flex text-yellow-400 text-lg">★★★★★</div>
            </motion.div>
            <motion.div 
              className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <p className="text-white/90 text-sm font-medium">100+ Projects</p>
              <p className="text-white text-xs">Completed in Dallas</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <ScrollIndicator scrollTo="services-section" />
    </section>
  );
} 