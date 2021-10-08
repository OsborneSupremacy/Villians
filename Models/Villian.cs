using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Villians.Models
{
    public record Villian
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        public string Name { get; set; }

        public string Powers { get; set; }

        public string ImgUrl { get; set; }

        public string ButtonText { get; set; }

        public string Saying { get; set; }
    }
}
