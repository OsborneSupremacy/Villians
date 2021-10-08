using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Driver;
using Villians.Models;

namespace Villians.Services
{
    public class VillianService
    {
        private readonly IMongoCollection<Villian> _villians;

        public VillianService(DatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _villians = database.GetCollection<Villian>(settings.CollectionName);
        }

        public async Task<List<Villian>> GetAsync() =>
            (await _villians.FindAsync(book => true)).ToList();

        public async Task<Villian> GetAsync(string id) =>
            (await _villians.FindAsync<Villian>(book => book.Id == id)).FirstOrDefault();

        public async Task<Villian> Create(Villian book)
        {
            await _villians.InsertOneAsync(book);
            return book;
        }

        public async Task UpdateAsync(string id, Villian bookIn) =>
            await _villians.ReplaceOneAsync(book => book.Id == id, bookIn);

        public async Task RemoveAsync(Villian bookIn) =>
            await _villians.DeleteOneAsync(book => book.Id == bookIn.Id);

        public async Task RemoveAsync(string id) =>
            await _villians.DeleteOneAsync(book => book.Id == id);
    }
}
