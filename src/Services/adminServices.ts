import httpService from "@/Config/httpServices";

class AdminService {
  // Method to get admin details by ID
  getAllFAQs = async () => {
    try {
      const response = await httpService.get(`api/faqs/get-all`);
      // console.log(response);
      return response.data;
    } catch (error: any) {
      console.error("Fetching Faq failed:", error);
      // Handle token error appropriately
    }
  };

  getFilteredFAQs = async (data: any) => {
    try {
      const response = await httpService.get(
        `api/faqs/filter?${data.filter}=${data.type}`
      );
      // console.log(response);
      return response.data;
    } catch (error: any) {
      console.error("Fetching Faq failed:", error);
      // Handle token error appropriately
    }
  };

  CreateFAQs = async (data: any) => {
    // TODO:ADD CREATE FAQ"S IMPLEMENTATION
    try {
      const response = await httpService.post(`api/faqs/create`, data);
      // console.log(response);
      return response.data;
    } catch (error: any) {
      console.error("Fetching Faq failed:", error);
      // Handle token error appropriately
    }
  };

  getStats = async () => {
    try {
      const response = await httpService.get(`api/stats/get-all`);
      // console.log(response.data);
      return response.data;
    } catch (error: any) {
      console.error("Fetching Faq failed:", error);
      // Handle token error appropriately
    }
  };

  getPromo = async () => {
    try {
      const response = await httpService.get(`api/promo/get-all`);
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      console.error("Fetching Faq failed:", error);
      // Handle token error appropriately
    }
  };

  UpdatePromo = async (PromoId: any) => {
    try {
      const response = await httpService.get(`api/promo/update/${PromoId}`);
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      console.error("Fetching Faq failed:", error);
      // Handle token error appropriately
    }
  };
}

export default new AdminService();
