export interface ICommunityIndex {
    type: string; // professional | hobby | educational
    category: string;
    membershipType: string; // open | inviteOnly | paid
    eventFrequency: string; // "weekly" | "monthly" | "quarterly" | "irregular"
    index: string[];
}

export interface IBusinessIndex {
    type: string; // "food_truck" | "delivery_service" | "mobile_service" | "fixed_location" | "hybrid"
    category: string; // "food_beverage" | "retail" | "professional_services" | "home_services" | "healthcare" | "other"
    mobility: string; // "mobile" | "fixed" | "hybrid"
    service_model: string; // "on_demand" | "scheduled" | "appointment_based" | "event_based"
    index: string[];

}