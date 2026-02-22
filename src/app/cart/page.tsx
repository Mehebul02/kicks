import Cart from '@/src/components/pages/cart/Cart';
import Container from '@/src/components/shared/Container';
import React from 'react';

const page = () => {
    return (
        <Container>
            <header className=" px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                    Saving to celebrate
                </h1>
                <p className="text-sm sm:text-base text-gray-600 mt-2">
                    Enjoy up to 60% off thousands of styles during the End of Year sale -
                    while supplies last. No code needed.
                </p>
                <p className="text-xs sm:text-sm text-gray-600 mt-2">
                    Join us or Sign-in
                </p>
            </header>
            <Cart />
        </Container>
    );
};

export default page;