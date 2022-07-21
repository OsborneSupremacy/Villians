
namespace Villians.Services;

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
        (await _villians.FindAsync(x => true)).ToList();

    public async Task<Villian> GetAsync(string id) =>
        (await _villians.FindAsync<Villian>(x => x.Id == id)).FirstOrDefault();

    public async Task<Villian> Create(Villian villian)
    {
        await _villians.InsertOneAsync(villian);
        return villian;
    }

    public async Task UpdateAsync(string id, Villian villianIn) =>
        await _villians.ReplaceOneAsync(x => x.Id == id, villianIn);

    public async Task RemoveAsync(Villian villianIn) =>
        await _villians.DeleteOneAsync(x => x.Id == villianIn.Id);

    public async Task RemoveAsync(string id) =>
        await _villians.DeleteOneAsync(x => x.Id == id);
}
