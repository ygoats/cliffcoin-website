import React from 'react';
import { Wallet, Users, ChevronDown, Twitter, Send } from 'lucide-react';

const SinglePageCliffcoin = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-pink-900">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 pb-12">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-6">
          $CLIFF
        </h1>
        <p className="text-3xl text-white mb-8">The Goodest Bad Boy in Crypto</p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full mb-12">
          <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-6 border border-pink-500/20">
            <div className="aspect-square bg-gray-800 rounded-xl mb-4 flex items-center justify-center text-gray-400">
              Innocent Clifford
            </div>
            <p className="text-gray-300">What They See</p>
          </div>
          <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-6 border border-pink-500/20">
            <div className="aspect-square bg-gray-800 rounded-xl mb-4 flex items-center justify-center text-gray-400">
              Player Clifford
            </div>
            <p className="text-gray-300">What He Really Is</p>
          </div>
        </div>
        <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-full text-xl mb-4">
          Buy $CLIFF
        </button>
        <ChevronDown className="text-white animate-bounce" size={32} />
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-pink-500 text-2xl font-bold">$1.2M</p>
            <p className="text-gray-400">Dog House Value</p>
          </div>
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-pink-500 text-2xl font-bold">2,500</p>
            <p className="text-gray-400">Total Holders</p>
          </div>
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-pink-500 text-2xl font-bold">100B</p>
            <p className="text-gray-400">Supply</p>
          </div>
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-pink-500 text-2xl font-bold">$250K</p>
            <p className="text-gray-400">24h Volume</p>
          </div>
        </div>
      </section>

      {/* How to Buy */}
      <section className="py-12 px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">How to Get Some $CLIFF</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6">
            <Wallet className="text-pink-500 w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">1. Get ETH</h3>
            <p className="text-gray-400">Buy ETH & send it to your wallet</p>
          </div>
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6">
            <Users className="text-pink-500 w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">2. Connect</h3>
            <p className="text-gray-400">Connect wallet to Uniswap</p>
          </div>
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6">
            <Send className="text-pink-500 w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">3. Swap</h3>
            <p className="text-gray-400">Swap ETH for $CLIFF</p>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-12 px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Join The Pack</h2>
        <div className="flex justify-center space-x-6">
          <a href="#" className="bg-black/30 backdrop-blur-sm rounded-full p-4 hover:bg-pink-500/20">
            <Twitter className="text-white w-8 h-8" />
          </a>
          <a href="#" className="bg-black/30 backdrop-blur-sm rounded-full p-4 hover:bg-pink-500/20">
            <Send className="text-white w-8 h-8" />
          </a>
        </div>
      </section>

      {/* Contract Info */}
      <footer className="py-12 px-4 text-center">
        <div className="max-w-2xl mx-auto bg-black/30 backdrop-blur-sm rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">Contract Address</h3>
          <p className="text-pink-500 break-all">0x1234...5678</p>
        </div>
      </footer>
    </div>
  );
};

export default SinglePageCliffcoin;