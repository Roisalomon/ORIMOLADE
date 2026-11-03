// Stockage centralisé de toutes les pages pour éviter les erreurs CORS de fetch() en local (file://)

window.SITE_PAGES = {
    // Dans js/pages.js, remplacez la propriété 'index' par :
    'index': `
        <!-- Multi-Hero Carousel Section (Inspiré du style Senat Jeunes / Phytocare) -->
        <section class="relative text-white py-16 sm:py-24 lg:py-32 overflow-hidden min-h-[500px] sm:min-h-[600px] flex items-center">
            
            <!-- SLIDE 1 BACKGROUND -->
            <div class="hero-slide absolute inset-0 transition-opacity duration-700 ease-in-out opacity-100 block">
                <div class="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-10000" style="background-image: url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80');"></div>
                <div class="absolute inset-0 bg-gradient-to-r from-orimolade-dark/95 via-orimolade-blue/85 to-transparent"></div>
            </div>

            <!-- SLIDE 2 BACKGROUND -->
            <div class="hero-slide absolute inset-0 transition-opacity duration-700 ease-in-out opacity-0 hidden">
                <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1920&q=80');"></div>
                <div class="absolute inset-0 bg-gradient-to-r from-orimolade-dark/95 via-orimolade-purple/85 to-transparent"></div>
            </div>

            <!-- SLIDE 3 BACKGROUND -->
            <div class="hero-slide absolute inset-0 transition-opacity duration-700 ease-in-out opacity-0 hidden">
                <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=80');"></div>
                <div class="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-orimolade-blue/85 to-transparent"></div>
            </div>

            <!-- Hero Content Container -->
            <div class="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 relative z-10 w-full">
                <div id="hero-slider" class="relative">

                    <!-- Slide 1 Content -->
                    <div class="hero-content-slide opacity-100 block">
                        <div class="max-w-2xl space-y-4 sm:space-y-6">
                            <span class="inline-block bg-orimolade-gold text-slate-900 font-extrabold text-xs uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                                Pilier N°1 • Autonomisation des Jeunes
                            </span>
                            <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                                Promouvoir l'<span class="text-orimolade-gold">Auto-emploi</span> & l'Entrepreneuriat
                            </h1>
                            <p class="text-sm sm:text-lg text-gray-200 font-normal leading-relaxed">
                                La Fondation ORIMOLADE accompagne les jeunes diplômés universitaires à créer leur propre entreprise durable grâce à nos incubateurs spécialisés.
                            </p>
                            <div class="flex flex-wrap gap-3 pt-2">
                                <a href="#projets" data-link="projets" class="bg-orimolade-gold hover:bg-yellow-500 text-slate-900 font-bold px-6 py-3 rounded-xl shadow-lg text-sm flex items-center gap-2 transition-all">
                                    <i class="fas fa-briefcase"></i> Voir nos Incubateurs
                                </a>
                                <a href="#a-propos" data-link="a-propos" class="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl backdrop-blur-md border border-white/20 text-sm flex items-center gap-2 transition-all">
                                    En savoir plus
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 2 Content (Masqué par défaut) -->
                    <div class="hero-content-slide opacity-0 hidden">
                        <div class="max-w-2xl space-y-4 sm:space-y-6">
                            <span class="inline-block bg-orimolade-purple text-white font-extrabold text-xs uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                                Pilier N°2 • Capital Humain
                            </span>
                            <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                                Coaching & <span class="text-purple-300">Renforcement des Capacités</span>
                            </h1>
                            <p class="text-sm sm:text-lg text-gray-200 font-normal leading-relaxed">
                                Formations professionnelles, mentorat individuel et développement personnel pour révéler le plein potentiel de chaque bénéficiaire.
                            </p>
                            <div class="flex flex-wrap gap-3 pt-2">
                                <a href="#a-propos" data-link="a-propos" class="bg-orimolade-purple hover:bg-purple-800 text-white font-bold px-6 py-3 rounded-xl shadow-lg text-sm flex items-center gap-2 transition-all">
                                    <i class="fas fa-graduation-cap"></i> Nos Programmes
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 3 Content (Masqué par défaut) -->
                    <div class="hero-content-slide opacity-0 hidden">
                        <div class="max-w-2xl space-y-4 sm:space-y-6">
                            <span class="inline-block bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                                Pilier N°3 • Solidarité Sociale
                            </span>
                            <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                                Assistance & <span class="text-orimolade-gold">Soutien aux Vulnérables</span>
                            </h1>
                            <p class="text-sm sm:text-lg text-gray-200 font-normal leading-relaxed">
                                Aide sociale, bourses d'études et accompagnement humanitaire pour les personnes et familles démunies en République du Bénin.
                            </p>
                            <div class="flex flex-wrap gap-3 pt-2">
                                <a href="#don" data-link="don" class="bg-orimolade-gold hover:bg-yellow-500 text-slate-900 font-bold px-6 py-3 rounded-xl shadow-lg text-sm flex items-center gap-2 transition-all">
                                    <i class="fas fa-heart text-red-700"></i> Faire un don
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Slider Controls & Indicators -->
                <div class="flex justify-between items-center mt-12 pt-6 border-t border-white/20 relative z-10">
                    <div class="flex space-x-2" id="hero-dots">
                        <button class="w-8 h-2 rounded-full bg-orimolade-gold transition-all" onclick="setSlide(0)" aria-label="Slide 1"></button>
                        <button class="w-3 h-2 rounded-full bg-white/40 hover:bg-white transition-all" onclick="setSlide(1)" aria-label="Slide 2"></button>
                        <button class="w-3 h-2 rounded-full bg-white/40 hover:bg-white transition-all" onclick="setSlide(2)" aria-label="Slide 3"></button>
                    </div>
                    <div class="flex space-x-3">
                        <button onclick="prevSlide()" class="w-10 h-10 rounded-full bg-white/10 hover:bg-orimolade-gold hover:text-slate-900 border border-white/30 flex items-center justify-center text-sm transition-all" aria-label="Précédent">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        <button onclick="nextSlide()" class="w-10 h-10 rounded-full bg-white/10 hover:bg-orimolade-gold hover:text-slate-900 border border-white/30 flex items-center justify-center text-sm transition-all" aria-label="Suivant">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>

            </div>
        </section>

        <!-- Chiffres Clés -->
        <section class="py-12 bg-white border-b border-gray-100">
            <div class="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div class="p-5 rounded-2xl bg-slate-50 border border-gray-100 shadow-sm">
                        <span class="block text-3xl sm:text-4xl font-black text-orimolade-blue">08 Août</span>
                        <span class="text-xs sm:text-sm text-gray-600 font-medium">Création Officielle (2026)</span>
                    </div>
                    <div class="p-5 rounded-2xl bg-slate-50 border border-gray-100 shadow-sm">
                        <span class="block text-3xl sm:text-4xl font-black text-orimolade-gold">100%</span>
                        <span class="text-xs sm:text-sm text-gray-600 font-medium">Apolitique & Laïque</span>
                    </div>
                    <div class="p-5 rounded-2xl bg-slate-50 border border-gray-100 shadow-sm">
                        <span class="block text-3xl sm:text-4xl font-black text-orimolade-purple">4</span>
                        <span class="text-xs sm:text-sm text-gray-600 font-medium">Organes de Gouvernance</span>
                    </div>
                    <div class="p-5 rounded-2xl bg-slate-50 border border-gray-100 shadow-sm">
                        <span class="block text-3xl sm:text-4xl font-black text-orimolade-blue">16.7M</span>
                        <span class="text-xs sm:text-sm text-gray-600 font-medium">Patrimoine Intégral (FCFA)</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section Mot du Fondateur -->
        <section class="py-16 bg-orimolade-light">
            <div class="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
                <div class="bg-white rounded-3xl p-8 sm:p-12 shadow-md border border-gray-200 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    <div class="md:col-span-4 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0 md:pr-8">
                        <div class="w-32 h-32 rounded-full bg-gradient-to-tr from-orimolade-blue to-orimolade-purple flex items-center justify-center text-white text-4xl font-bold shadow-lg mb-4">
                            HBM
                        </div>
                        <h3 class="font-bold text-xl text-slate-900">HOUENOU Benoît Mahusedê</h3>
                        <span class="text-sm font-semibold text-orimolade-gold">Membre Fondateur</span>
                    </div>
                    <div class="md:col-span-8 space-y-4">
                        <i class="fas fa-quote-left text-4xl text-orimolade-gold opacity-50"></i>
                        <p class="text-gray-700 italic text-base sm:text-lg leading-relaxed">
                            « Soucieux des défis socio-économiques auxquels sont confrontés de nombreux jeunes diplômés et personnes en situation de précarité, nous avons résolu de mettre en place une fondation d'intérêt général ayant pour vocation de contribuer au développement humain, à l'autonomisation économique et à la promotion de la solidarité. »
                        </p>
                        <div class="pt-2">
                            <span class="text-xs font-bold text-orimolade-purple uppercase tracking-wider">Préambule des Statuts Officiels</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- AJOUT DES EXTRAITS DES PAGES "A PROPOS" ET "PROJETS" SUR LA PAGE D'ACCUEIL -->
        <section class="py-16 bg-white border-t border-gray-100">
            <div class="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 space-y-16">
                
                <!-- Aperçu Qui sommes-nous -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div class="space-y-4">
                        <span class="text-orimolade-gold font-bold text-xs uppercase tracking-widest">Institution & Légitimité</span>
                        <h2 class="text-2xl sm:text-3xl font-bold text-slate-900">Qui sommes-nous ?</h2>
                        <p class="text-gray-600 leading-relaxed text-sm sm:text-base">
                            Créée le <strong>08 Août 2026</strong> en République du Bénin, la <strong>FONDATION ORIMOLADE</strong> est une organisation apolitique, laïque et à but non lucratif dédiée à l'autonomisation économique des jeunes et au soutien des personnes vulnérables.
                        </p>
                        <div class="pt-2">
                            <a href="#a-propos" data-link="a-propos" class="inline-flex items-center gap-2 text-sm font-bold text-orimolade-blue hover:text-orimolade-gold transition-colors">
                                Découvrir tous nos statuts et valeurs <i class="fas fa-arrow-right text-xs"></i>
                            </a>
                        </div>
                    </div>
                    <div class="bg-orimolade-light p-6 sm:p-8 rounded-3xl border border-gray-200 space-y-4">
                        <h3 class="text-lg font-bold text-orimolade-blue flex items-center gap-2">
                            <i class="fas fa-balance-scale text-orimolade-gold"></i> Nos Objectifs Clés
                        </h3>
                        <ul class="space-y-2.5 text-sm text-gray-700">
                            <li class="flex items-center gap-2"><i class="fas fa-check text-orimolade-gold"></i> Promotion de l'auto-emploi des jeunes</li>
                            <li class="flex items-center gap-2"><i class="fas fa-check text-orimolade-gold"></i> Coaching et mentorat individuel</li>
                            <li class="flex items-center gap-2"><i class="fas fa-check text-orimolade-gold"></i> Assistance sociale et bourses d'études</li>
                            <li class="flex items-center gap-2"><i class="fas fa-check text-orimolade-gold"></i> Administration d'incubateurs d'entreprises</li>
                        </ul>
                    </div>
                </div>

                <!-- Aperçu Projets & Activités -->
                <div class="pt-8 border-t border-gray-100">
                    <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
                        <div>
                            <span class="text-orimolade-blue font-bold text-xs uppercase tracking-widest">Nos Actions Terrain</span>
                            <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">Projets & Moyens d'Action</h2>
                        </div>
                        <a href="#projets" data-link="projets" class="inline-flex items-center gap-2 text-sm font-bold text-orimolade-blue hover:text-orimolade-gold transition-colors">
                            Voir tous les programmes <i class="fas fa-arrow-right text-xs"></i>
                        </a>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="bg-slate-50 p-6 rounded-2xl border border-gray-200 space-y-3">
                            <div class="w-12 h-12 bg-orimolade-blue text-white rounded-xl flex items-center justify-center text-lg font-bold">
                                <i class="fas fa-building-user"></i>
                            </div>
                            <h3 class="font-bold text-slate-900">Incubateurs d'Entreprises</h3>
                            <p class="text-xs text-gray-600 leading-relaxed">Transformation des projets académiques et idées innovantes en PME pérennes pour les diplômés.</p>
                        </div>
                        <div class="bg-slate-50 p-6 rounded-2xl border border-gray-200 space-y-3">
                            <div class="w-12 h-12 bg-orimolade-gold text-slate-900 rounded-xl flex items-center justify-center text-lg font-bold">
                                <i class="fas fa-graduation-cap"></i>
                            </div>
                            <h3 class="font-bold text-slate-900">Bourses & Subventions</h3>
                            <p class="text-xs text-gray-600 leading-relaxed">Octroi de bourses d'études et de subventions aux porteurs de projets à fort impact social.</p>
                        </div>
                        <div class="bg-slate-50 p-6 rounded-2xl border border-gray-200 space-y-3">
                            <div class="w-12 h-12 bg-orimolade-purple text-white rounded-xl flex items-center justify-center text-lg font-bold">
                                <i class="fas fa-chalkboard-user"></i>
                            </div>
                            <h3 class="font-bold text-slate-900">Colloques & Séminaires</h3>
                            <p class="text-xs text-gray-600 leading-relaxed">Organisation d'ateliers de sensibilisation et de formation professionnelle continue.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <!-- Script de carousel dynamique -->
        <script>
            if (typeof initHeroCarousel === 'function') {
                initHeroCarousel();
            }
        </script>
    `,
    'a-propos': `
        <section class="bg-orimolade-blue text-white py-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 text-center">
                <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight">À Propos de la Fondation</h1>
                <p class="mt-2 text-blue-100 text-sm sm:text-base">Missions, objectifs, gouvernance et cadre juridique</p>
            </div>
        </section>

        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 space-y-12">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div class="space-y-4">
                        <span class="text-orimolade-gold font-bold text-xs uppercase tracking-widest">Création & Récépissé</span>
                        <h2 class="text-2xl sm:text-3xl font-bold text-slate-900">Création et Régime Juridique</h2>
                        <p class="text-gray-600 leading-relaxed text-sm sm:text-base">
                            Créée le <strong>08 Août 2026</strong> en République du Bénin par son membre Fondateur Monsieur HOUENOU Benoît Mahusedê, la <strong>FONDATION ORIMOLADE</strong> est une organisation apolitique, laïque, à but non lucratif et non confessionnel.
                        </p>
                        <p class="text-gray-600 leading-relaxed text-sm sm:text-base">
                            La Fondation est régie conformément à la loi n° 2025-19 du 22 juillet 2025 relative aux associations et aux fondations en République du Bénin, ainsi qu'aux décrets n°2025-638 et n°2025-575.
                        </p>
                    </div>
                    <div class="bg-orimolade-light p-6 sm:p-8 rounded-2xl border border-gray-200 space-y-4">
                        <h3 class="text-xl font-bold text-orimolade-blue flex items-center gap-2">
                            <i class="fas fa-balance-scale text-orimolade-gold"></i> Nos Valeurs Fondatrices
                        </h3>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                            <div class="bg-white p-3 rounded-lg shadow-sm font-semibold text-gray-800 flex items-center gap-2">
                                <i class="fas fa-hand-holding-heart text-orimolade-purple"></i> Solidarité
                            </div>
                            <div class="bg-white p-3 rounded-lg shadow-sm font-semibold text-gray-800 flex items-center gap-2">
                                <i class="fas fa-scale-balanced text-orimolade-blue"></i> Équité
                            </div>
                            <div class="bg-white p-3 rounded-lg shadow-sm font-semibold text-gray-800 flex items-center gap-2">
                                <i class="fas fa-shield-alt text-orimolade-gold"></i> Responsabilité
                            </div>
                            <div class="bg-white p-3 rounded-lg shadow-sm font-semibold text-gray-800 flex items-center gap-2">
                                <i class="fas fa-award text-orimolade-purple"></i> Excellence
                            </div>
                        </div>
                    </div>
                </div>

                <div class="pt-8 border-t border-gray-200">
                    <h2 class="text-2xl font-bold text-center text-slate-900 mb-8">Nos Objectifs Spécifiques </h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div class="p-6 bg-slate-50 rounded-xl border border-gray-200 space-y-2">
                            <i class="fas fa-seedling text-orimolade-blue text-2xl"></i>
                            <h3 class="font-bold text-gray-900">Auto-emploi & Entrepreneuriat</h3>
                            <p class="text-xs text-gray-600">Promouvoir l'auto-emploi et l'entrepreneuriat dynamique chez les jeunes et les femmes.</p>
                        </div>
                        <div class="p-6 bg-slate-50 rounded-xl border border-gray-200 space-y-2">
                            <i class="fas fa-user-gear text-orimolade-gold text-2xl"></i>
                            <h3 class="font-bold text-gray-900">Coaching & Développement</h3>
                            <p class="text-xs text-gray-600">Assurer le coaching individuel, le mentorat et le développement personnel des bénéficiaires.</p>
                        </div>
                        <div class="p-6 bg-slate-50 rounded-xl border border-gray-200 space-y-2">
                            <i class="fas fa-graduation-cap text-orimolade-purple text-2xl"></i>
                            <h3 class="font-bold text-gray-900">Renforcement des Capacités</h3>
                            <p class="text-xs text-gray-600">Développer les compétences techniques, professionnelles et entrepreneuriales des jeunes.</p>
                        </div>
                        <div class="p-6 bg-slate-50 rounded-xl border border-gray-200 space-y-2">
                            <i class="fas fa-door-open text-orimolade-blue text-2xl"></i>
                            <h3 class="font-bold text-gray-900">Insertion Professionnelle</h3>
                            <p class="text-xs text-gray-600">Accompagner les jeunes diplômés des universités vers le marché du travail.</p>
                        </div>
                        <div class="p-6 bg-slate-50 rounded-xl border border-gray-200 space-y-2">
                            <i class="fas fa-heart-hands text-orimolade-gold text-2xl"></i>
                            <h3 class="font-bold text-gray-900">Assistance Humanitaire</h3>
                            <p class="text-xs text-gray-600">Apporter un soutien social, éducatif et matériel aux personnes et couches démunies.</p>
                        </div>
                        <div class="p-6 bg-slate-50 rounded-xl border border-gray-200 space-y-2">
                            <i class="fas fa-coins text-orimolade-purple text-2xl"></i>
                            <h3 class="font-bold text-gray-900">Accès aux Financements</h3>
                            <p class="text-xs text-gray-600">Faciliter l'accès aux opportunités de financement, de formation et d'incubation.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    'projets': `
        <section class="bg-orimolade-blue text-white py-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 text-center">
                <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight">Projets & Moyens d'Action</h1>
                <p class="mt-2 text-blue-100 text-sm sm:text-base">Mise en œuvre opérationnelle des missions de la fondation</p>
            </div>
        </section>

        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 space-y-12">
                <div class="text-center max-w-3xl mx-auto space-y-3">
                    <h2 class="text-2xl font-bold text-slate-900">Nos Moyens d'Intervention </h2>
                    <p class="text-gray-600 text-sm">Pour atteindre ses objectifs d'intérêt général, la Fondation ORIMOLADE déploie divers leviers stratégiques.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-orimolade-light p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
                        <div class="w-12 h-12 bg-orimolade-blue text-white rounded-xl flex items-center justify-center text-xl font-bold">
                            <i class="fas fa-graduation-cap"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900">Bourses, Prix & Subventions</h3>
                        <p class="text-gray-600 text-sm leading-relaxed">
                            Mise en place d'allocations sous forme de bourses d'études, de prix d'excellence et de subventions aux porteurs de projets à fort impact social.
                        </p>
                    </div>

                    <div class="bg-orimolade-light p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
                        <div class="w-12 h-12 bg-orimolade-gold text-slate-900 rounded-xl flex items-center justify-center text-xl font-bold">
                            <i class="fas fa-building-user"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900">Incubateurs d'Entreprises</h3>
                        <p class="text-gray-600 text-sm leading-relaxed">
                            Administration d'incubateurs dédiés à l'accompagnement des diplômés universitaires pour transformer leurs idées en entreprises pérennes.
                        </p>
                    </div>

                    <div class="bg-orimolade-light p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
                        <div class="w-12 h-12 bg-orimolade-purple text-white rounded-xl flex items-center justify-center text-xl font-bold">
                            <i class="fas fa-chalkboard-user"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900">Colloques & Séminaires</h3>
                        <p class="text-gray-600 text-sm leading-relaxed">
                            Initiation et organisation de conférences, ateliers et ateliers de sensibilisation pour le renforcement continu des capacités.
                        </p>
                    </div>

                    <div class="bg-orimolade-light p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
                        <div class="w-12 h-12 bg-slate-800 text-white rounded-xl flex items-center justify-center text-xl font-bold">
                            <i class="fas fa-handshake"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900">Partenariats Éducatifs</h3>
                        <p class="text-gray-600 text-sm leading-relaxed">
                            Concours apporté aux œuvres et organisations d'enseignements publics ou privés pour la réussite des parcours d'insertion.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    `,
    'galerie': `
        <section class="bg-orimolade-blue text-white py-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 text-center">
                <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight">Galerie Média</h1>
                <p class="mt-2 text-blue-100 text-sm sm:text-base">Moments forts et activités de la fondation</p>
            </div>
        </section>

        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 text-center">
                <div class="p-12 bg-orimolade-light rounded-2xl border border-dashed border-gray-300 max-w-2xl mx-auto space-y-4">
                    <i class="fas fa-images text-5xl text-orimolade-gold"></i>
                    <h3 class="text-xl font-bold text-gray-800">Galerie en cours d'enrichissement</h3>
                    <p class="text-gray-600 text-sm">
                        Les photos et reportages vidéo des premières activités officielles et cérémonies d'octroi de bourses seront publiés très prochainement.
                    </p>
                </div>
            </div>
        </section>
    `,
    'equipe': `
        <section class="bg-orimolade-blue text-white py-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 text-center">
                <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight">Gouvernance & Équipe</h1>
                <p class="mt-2 text-blue-100 text-sm sm:text-base">Structure organisationnelle de la Fondation ORIMOLADE</p>
            </div>
        </section>

        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 space-y-16">
                <div class="space-y-6">
                    <div class="border-b border-gray-200 pb-4">
                        <h2 class="text-2xl font-bold text-slate-900">Conseil d'Administration </h2>
                        <p class="text-sm text-gray-600">Organe d'administration et d'orientation stratégique (Mandat de 5 ans)</p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div class="bg-orimolade-light p-6 rounded-xl border border-orimolade-gold/40 shadow-sm space-y-2 text-center">
                            <div class="w-20 h-20 bg-orimolade-blue text-white font-bold rounded-full flex items-center justify-center mx-auto text-xl">HBM</div>
                            <h3 class="font-bold text-gray-900">HOUENOU Benoît Mahusedê</h3>
                            <span class="inline-block bg-orimolade-gold text-slate-900 text-xs font-bold px-2.5 py-1 rounded-full">Membre Fondateur Permanent</span>
                        </div>
                        <div class="bg-slate-50 p-6 rounded-xl border border-gray-200 space-y-2 text-center">
                            <div class="w-16 h-16 bg-gray-200 text-gray-700 font-bold rounded-full flex items-center justify-center mx-auto text-lg"><i class="fas fa-user-tie"></i></div>
                            <h3 class="font-bold text-gray-900">Président du C.A</h3>
                            <p class="text-xs text-gray-500">Gouvernance & Représentation</p>
                        </div>
                        <div class="bg-slate-50 p-6 rounded-xl border border-gray-200 space-y-2 text-center">
                            <div class="w-16 h-16 bg-gray-200 text-gray-700 font-bold rounded-full flex items-center justify-center mx-auto text-lg"><i class="fas fa-user-tie"></i></div>
                            <h3 class="font-bold text-gray-900">Vice-Président</h3>
                            <p class="text-xs text-gray-500">Appui à la Présidence</p>
                        </div>
                        <div class="bg-slate-50 p-6 rounded-xl border border-gray-200 space-y-2 text-center">
                            <div class="w-16 h-16 bg-gray-200 text-gray-700 font-bold rounded-full flex items-center justify-center mx-auto text-lg"><i class="fas fa-file-pen"></i></div>
                            <h3 class="font-bold text-gray-900">Secrétaire Général</h3>
                            <p class="text-xs text-gray-500">Administration & Suivi (+ Adjoint)</p>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-orimolade-light p-6 rounded-2xl border border-gray-200 space-y-4">
                        <h3 class="text-xl font-bold text-orimolade-purple flex items-center gap-2">
                            <i class="fas fa-shield-halved"></i> Conseil de Surveillance 
                        </h3>
                        <p class="text-xs text-gray-600 leading-relaxed">
                            Composé de 3 membres élus pour 3 ans (Un Président, un Secrétaire, un Membre). Indépendant, il est chargé du contrôle de la gestion administrative et financière.
                        </p>
                    </div>

                    <div class="bg-orimolade-light p-6 rounded-2xl border border-gray-200 space-y-4">
                        <h3 class="text-xl font-bold text-orimolade-blue flex items-center gap-2">
                            <i class="fas fa-cogs"></i> Direction Exécutive 
                        </h3>
                        <p class="text-xs text-gray-600 leading-relaxed">
                            Organe d'exécution composé d'un Coordonneur, de Chargés de programme, d'un Secrétaire Administratif et d'un Comptable pour la mise en œuvre terrain.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    `,
    'actualites': `
        <section class="bg-orimolade-blue text-white py-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 text-center">
                <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight">Actualités & Communiqués</h1>
                <p class="mt-2 text-blue-100 text-sm sm:text-base">Annonces officielles de la Fondation ORIMOLADE</p>
            </div>
        </section>

        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
                <div class="max-w-3xl mx-auto bg-slate-50 border border-gray-200 rounded-2xl p-8 space-y-4 shadow-sm">
                    <div class="flex items-center gap-3 text-xs text-orimolade-gold font-bold uppercase">
                        <i class="fas fa-calendar"></i> 08 Août 2026
                    </div>
                    <h2 class="text-xl font-bold text-slate-900">Création officielle de la Fondation ORIMOLADE à Abomey-Calavi</h2>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Les membres fondateurs annoncent l'adoption officielle des statuts créant la Fondation ORIMOLADE au Bénin, visant l'autonomisation des jeunes et le soutien aux vulnérables.
                    </p>
                    <a href="#a-propos" data-link="a-propos" class="inline-flex items-center gap-2 text-sm font-bold text-orimolade-blue hover:text-orimolade-gold">
                        Lire le détail dans les statuts <i class="fas fa-arrow-right text-xs"></i>
                    </a>
                </div>
            </div>
        </section>
    `,
    'don': `
        <section class="bg-orimolade-blue text-white py-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 text-center">
                <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight">Faire un Don & Soutenir</h1>
                <p class="mt-2 text-blue-100 text-sm sm:text-base">Contribuez à l'autonomisation des jeunes et à la solidarité sociale</p>
            </div>
        </section>

        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div class="lg:col-span-7 space-y-6">
                        <h2 class="text-2xl font-bold text-slate-900">Transparence des Ressources </h2>
                        <p class="text-gray-600 text-sm leading-relaxed">
                            Le patrimoine de la Fondation est initialement arrêté à la somme de <strong>16 750 000 FCFA</strong> avec une dotation initiale d'un million (1 000 000 FCFA). Vos contributions soutiennent directement nos programmes d'accompagnement.
                        </p>
                        <div class="bg-orimolade-light p-6 rounded-2xl border border-gray-200 space-y-3">
                            <h3 class="font-bold text-orimolade-blue flex items-center gap-2"><i class="fas fa-university"></i> Coordonnées de contact pour les dons</h3>
                            <p class="text-xs text-gray-600">Pour tout don bancaire, don en nature ou subvention institutionnelle, contactez la Direction :</p>
                            <p class="text-sm font-bold text-slate-800"><i class="fas fa-phone text-orimolade-gold mr-2"></i> +229 01 96 84 36 09</p>
                            <p class="text-sm font-bold text-slate-800"><i class="fas fa-envelope text-orimolade-gold mr-2"></i> fondationorimolade@gmail.com</p>
                        </div>
                    </div>

                    <div class="lg:col-span-5">
                        <div class="bg-slate-50 p-8 rounded-2xl border border-gray-200 space-y-4 shadow-sm">
                            <h3 class="text-xl font-bold text-slate-900">Formulaire d'Intention de Don</h3>
                            <form class="space-y-4 text-sm" onsubmit="event.preventDefault(); alert('Merci pour votre soutien ! Un responsable de la fondation vous contactera sous peu.');">
                                <div>
                                    <label class="block font-semibold text-gray-700 mb-1">Nom & Prénom / Structure</label>
                                    <input type="text" required class="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orimolade-blue focus:outline-none">
                                </div>
                                <div>
                                    <label class="block font-semibold text-gray-700 mb-1">Adresse Email</label>
                                    <input type="email" required class="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orimolade-blue focus:outline-none">
                                </div>
                                <div>
                                    <label class="block font-semibold text-gray-700 mb-1">Type de soutien</label>
                                    <select class="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orimolade-blue focus:outline-none">
                                        <option>Don Financier</option>
                                        <option>Don Matériel / Équipement</option>
                                        <option>Partenariat / Bénévolat</option>
                                    </select>
                                </div>
                                <button type="submit" class="w-full bg-orimolade-gold hover:bg-yellow-500 text-slate-900 font-bold py-3 rounded-lg shadow-md transition-colors">
                                    Soumettre mon intention
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    'contact': `
        <section class="bg-orimolade-blue text-white py-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 text-center">
                <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight">Contactez-nous</h1>
                <p class="mt-2 text-blue-100 text-sm sm:text-base">Siège social et informations de contact </p>
            </div>
        </section>

        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div class="lg:col-span-5 space-y-6">
                        <div class="bg-orimolade-light p-8 rounded-2xl border border-gray-200 space-y-6">
                            <h3 class="text-xl font-bold text-slate-900">Coordonnées Officielles</h3>
                            
                            <div class="flex items-start gap-4">
                                <div class="w-10 h-10 bg-orimolade-blue text-white rounded-lg flex items-center justify-center shrink-0">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <div class="text-sm">
                                    <span class="block font-bold text-gray-900">Adresse du Siège</span>
                                    <span class="text-gray-600">République du Bénin, Dép. Atlantique, Abomey-Calavi, Arr. Godomey, Q. Yolomahouto, Immeuble HOUENOU Ezequiel, Lot 17bis, Parcelle M.</span>
                                </div>
                            </div>

                            <div class="flex items-start gap-4">
                                <div class="w-10 h-10 bg-orimolade-gold text-slate-900 rounded-lg flex items-center justify-center shrink-0">
                                    <i class="fas fa-phone"></i>
                                </div>
                                <div class="text-sm">
                                    <span class="block font-bold text-gray-900">Téléphone / WhatsApp</span>
                                    <a href="tel:+2290196843609" class="text-orimolade-blue font-bold">+229 01 96 84 36 09</a>
                                </div>
                            </div>

                            <div class="flex items-start gap-4">
                                <div class="w-10 h-10 bg-orimolade-purple text-white rounded-lg flex items-center justify-center shrink-0">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <div class="text-sm">
                                    <span class="block font-bold text-gray-900">Adresse Email</span>
                                    <a href="mailto:fondationorimolade@gmail.com" class="text-orimolade-blue font-bold break-all">fondationorimolade@gmail.com</a>
                                </div>
                            </div>

                            <div class="flex items-start gap-4">
                                <div class="w-10 h-10 bg-slate-800 text-white rounded-lg flex items-center justify-center shrink-0">
                                    <i class="fas fa-globe"></i>
                                </div>
                                <div class="text-sm">
                                    <span class="block font-bold text-gray-900">Site Web</span>
                                    <a href="http://www.fondationorimolade.com" target="_blank" class="text-orimolade-blue font-bold">www.fondationorimolade.com</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-7">
                        <div class="bg-slate-50 p-8 rounded-2xl border border-gray-200 space-y-4 shadow-sm">
                            <h3 class="text-xl font-bold text-slate-900">Envoyer un message</h3>
                            <form class="space-y-4 text-sm" onsubmit="event.preventDefault(); alert('Message envoyé avec succès à la Fondation ORIMOLADE !');">
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label class="block font-semibold text-gray-700 mb-1">Nom complet</label>
                                        <input type="text" required class="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orimolade-blue focus:outline-none">
                                    </div>
                                    <div>
                                        <label class="block font-semibold text-gray-700 mb-1">Numéro de téléphone</label>
                                        <input type="tel" required class="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orimolade-blue focus:outline-none">
                                    </div>
                                </div>
                                <div>
                                    <label class="block font-semibold text-gray-700 mb-1">Adresse Email</label>
                                    <input type="email" required class="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orimolade-blue focus:outline-none">
                                </div>
                                <div>
                                    <label class="block font-semibold text-gray-700 mb-1">Sujet</label>
                                    <input type="text" required class="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orimolade-blue focus:outline-none">
                                </div>
                                <div>
                                    <label class="block font-semibold text-gray-700 mb-1">Message</label>
                                    <textarea rows="4" required class="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orimolade-blue focus:outline-none"></textarea>
                                </div>
                                <button type="submit" class="bg-orimolade-blue hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-lg shadow-md transition-colors">
                                    Envoyer le message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
};