export default function About() {
    return (
        <main className="pt-16">
            {/* Hero Section */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-bold text-center mb-8">About Us</h1>
                    <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
                        We are a team of passionate developers and designers dedicated to creating amazing web experiences.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                            <p className="text-gray-600 mb-6">
                                Our mission is to empower developers and businesses to build better web applications
                                using modern technologies and best practices. We believe in creating tools and
                                platforms that make web development more accessible and efficient.
                            </p>
                            <p className="text-gray-600">
                                With our expertise in Next.js, React, and modern web technologies, we help
                                companies transform their ideas into reality.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-8 rounded-lg">
                            <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="text-blue-600 mr-2">✓</span>
                                    <span>Expert team of developers and designers</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-600 mr-2">✓</span>
                                    <span>Cutting-edge technology stack</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-600 mr-2">✓</span>
                                    <span>Focus on performance and user experience</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-600 mr-2">✓</span>
                                    <span>Dedicated support and maintenance</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: 'John Doe',
                                role: 'CEO & Founder',
                                description: 'Passionate about technology and innovation'
                            },
                            {
                                name: 'Jane Smith',
                                role: 'Lead Developer',
                                description: 'Expert in React and Next.js'
                            },
                            {
                                name: 'Mike Johnson',
                                role: 'UI/UX Designer',
                                description: 'Creating beautiful user experiences'
                            }
                        ].map((member, index) => (
                            <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                                <p className="text-blue-600 mb-4">{member.role}</p>
                                <p className="text-gray-600">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Innovation',
                                description: 'We constantly explore new technologies and approaches to stay ahead of the curve.'
                            },
                            {
                                title: 'Quality',
                                description: 'We are committed to delivering high-quality solutions that exceed expectations.'
                            },
                            {
                                title: 'Collaboration',
                                description: 'We believe in the power of teamwork and open communication.'
                            }
                        ].map((value, index) => (
                            <div key={index} className="text-center p-6">
                                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
} 